<template>
  <div :class="ui.wrapper">
    <fieldset v-bind="attrs" :class="ui.fieldset">
      <legend v-if="legend || $slots.legend" :class="ui.legend">
        <slot name="legend">
          {{ legend }}
        </slot>
      </legend>
      <URadio
        v-for="option in normalizedOptions"
        :key="option.value"
        :label="option.label"
        :model-value="modelValue"
        :value="option.value"
        :help="option.help"
        :disabled="option.disabled || disabled"
        :ui="uiRadio"
        @change="onUpdate(option.value)"
      >
        <template #label>
          <slot name="label" v-bind="{ option, selected: option.selected }" />
        </template>

        <template #help>
          <slot name="help" v-bind="{ option, selected: option.selected }" />
        </template>
      </URadio>
    </fieldset>
  </div>
</template>

<script>
import URadio from "./Radio.vue";
import { computed, defineComponent, provide, toRef } from "vue";
import { useUI } from "../../composables/useUI";
import { useFormGroup } from "../../composables/useFormGroup";
import { mergeConfig, get } from "../../utils";
import appConfig from "#build/app.config";
import { radioGroup, radio } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.radioGroup, radioGroup);
const configRadio = mergeConfig(appConfig.ui.strategy, appConfig.ui.radio, radio);
export default defineComponent({
  components: {
    URadio
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean],
      default: ""
    },
    name: {
      type: String,
      default: null
    },
    legend: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    disabled: {
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
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiRadio: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("radioGroup", toRef(props, "ui"), config, toRef(props, "class"));
    const { ui: uiRadio } = useUI("radio", toRef(props, "uiRadio"), configRadio);
    const { emitFormChange, color, name } = useFormGroup(props, config);
    provide("radio-group", { color, name });
    const onUpdate = (value) => {
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, get(option, props.optionAttribute));
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, get(option, props.valueAttribute));
    };
    const guessOptionSelected = (option) => {
      return props.modelValue === guessOptionValue(option);
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          value: option,
          label: option
        };
      }
      return {
        ...option,
        value: guessOptionValue(option),
        label: guessOptionText(option),
        selected: guessOptionSelected(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiRadio,
      attrs,
      normalizedOptions,
      // eslint-disable-next-line vue/no-dupe-keys
      onUpdate
    };
  }
});
</script>
