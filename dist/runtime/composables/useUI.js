import { computed, toValue, useAttrs } from "vue";
import { useAppConfig } from "#imports";
import { mergeConfig, omit, get } from "../utils/index.js";
export const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig = useAppConfig();
  const ui = computed(() => {
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      _ui?.strategy || appConfig.ui?.strategy,
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      process.dev || withAppConfig ? get(appConfig.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
