import { ref, inject } from "vue";
import { createSharedComposable } from "@vueuse/core";
export const slidOverInjectionKey = Symbol("nuxt-ui.slideover");
function _useSlideover() {
  const slideoverState = inject(slidOverInjectionKey);
  const isOpen = ref(false);
  function open(component, props) {
    if (!slideoverState) {
      throw new Error("useSlideover() is called without provider");
    }
    slideoverState.value = {
      component,
      props: props ?? {}
    };
    isOpen.value = true;
  }
  async function close() {
    if (!slideoverState) return;
    isOpen.value = false;
  }
  function reset() {
    slideoverState.value = {
      component: "div",
      props: {}
    };
  }
  function patch(props) {
    if (!slideoverState) return;
    slideoverState.value = {
      ...slideoverState.value,
      props: {
        ...slideoverState.value.props,
        ...props
      }
    };
  }
  return {
    open,
    close,
    reset,
    patch,
    isOpen
  };
}
export const useSlideover = createSharedComposable(_useSlideover);
