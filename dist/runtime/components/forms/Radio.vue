<template>
  <div :class="ui.wrapper" :data-n-ids="attrs['data-n-ids']">
    <div :class="ui.container">
      <input
        :id="inputId"
        v-model="pick"
        :name="name"
        :required="required"
        :value="value"
        :disabled="disabled"
        type="radio"
        :class="inputClass"
        v-bind="attrs"
        @change="onChange"
      >
    </div>
    <div v-if="label || $slots.label" :class="ui.inner">
      <label :for="inputId" :class="ui.label">
        <slot name="label" :label="label">{{ label }}</slot>
        <span v-if="required" :class="ui.required">*</span>
      </label>
      <p v-if="help || $slots.help" :class="ui.help">
        <slot name="help" :help="help">
          {{ help }}
        </slot>
      </p>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, inject, toRef } from "vue";
import { twMerge, twJoin } from "tailwind-merge";
import { useUI } from "../../composables/useUI";
import { useFormGroup } from "../../composables/useFormGroup";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { radio } from "#ui/ui.config";
import { useId } from "#imports";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.radio, radio);
export default defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("radio", toRef(props, "ui"), config, toRef(props, "class"));
    const inputId = props.id ?? useId();
    const radioGroup = inject("radio-group", null);
    const { emitFormChange, color, name } = radioGroup ?? useFormGroup(props, config);
    const pick = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        if (!radioGroup) {
          emitFormChange();
        }
      }
    });
    function onChange(event) {
      emit("change", event.target.value);
    }
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      pick,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      onChange
    };
  }
});
</script>
