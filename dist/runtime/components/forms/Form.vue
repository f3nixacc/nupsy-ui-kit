<template>
  <form @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script>
import { provide, ref, defineComponent, onUnmounted, onMounted } from "vue";
import { useEventBus } from "@vueuse/core";
import { useId } from "#imports";
class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
export default defineComponent({
  props: {
    schema: {
      type: [Object, Function],
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const formId = useId();
    const bus = useEventBus(`form-${formId}`);
    onMounted(() => {
      bus.on(async (event) => {
        if (event.type !== "submit" && props.validateOn?.includes(event.type)) {
          await validate(event.path, { silent: true });
        }
      });
    });
    onUnmounted(() => {
      bus.reset();
    });
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        if (isZodSchema(props.schema)) {
          errs = errs.concat(await getZodErrors(props.state, props.schema));
        } else if (isYupSchema(props.schema)) {
          errs = errs.concat(await getYupErrors(props.state, props.schema));
        } else if (isJoiSchema(props.schema)) {
          errs = errs.concat(await getJoiErrors(props.state, props.schema));
        } else if (isValibotSchema(props.schema)) {
          errs = errs.concat(await getValibotError(props.state, props.schema));
        } else {
          throw new Error("Form validation failed: Unsupported form schema");
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      let paths = path;
      if (path && !Array.isArray(path)) {
        paths = [path];
      }
      if (paths) {
        const otherErrors = errors.value.filter(
          (error) => !paths.includes(error.path)
        );
        const pathErrors = (await getErrors()).filter(
          (error) => paths.includes(error.path)
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (errors.value.length > 0) {
        if (opts.silent) return false;
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      const event = payload;
      try {
        if (props.validateOn?.includes("submit")) {
          await validate();
        }
        event.data = props.state;
        emit("submit", event);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
async function getYupErrors(state, schema) {
  try {
    await schema.validate(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isYupError(error)) {
      return error.inner.map((issue) => ({
        path: issue.path ?? "",
        message: issue.message
      }));
    } else {
      throw error;
    }
  }
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
async function getZodErrors(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    return result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
  }
  return [];
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
async function getJoiErrors(state, schema) {
  try {
    await schema.validateAsync(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isJoiError(error)) {
      return error.details.map((detail) => ({
        path: detail.path.join("."),
        message: detail.message
      }));
    } else {
      throw error;
    }
  }
}
function isValibotSchema(schema) {
  return "_parse" in schema || "_run" in schema || typeof schema === "function" && "schema" in schema;
}
async function getValibotError(state, schema) {
  const result = await ("_parse" in schema ? schema._parse(state) : "_run" in schema ? schema._run({ typed: false, value: state }, {}) : schema(state));
  return result.issues?.map((issue) => ({
    // We know that the key for a form schema is always a string or a number
    path: issue.path?.map((item) => item.key).join(".") || "",
    message: issue.message
  })) || [];
}
</script>
