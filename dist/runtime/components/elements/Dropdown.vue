<template>
  <!-- eslint-disable-next-line vue/no-template-shadow -->
  <HMenu v-slot="{ open }" as="div" :class="ui.wrapper" v-bind="attrs" @mouseleave="onMouseLeave">
    <HMenuButton
      ref="trigger"
      as="div"
      :disabled="disabled"
      :class="ui.trigger"
      role="button"
      @mouseenter="onMouseEnter"
      @touchstart.passive="onTouchStart"
    >
      <slot :open="open" :disabled="disabled">
        <button :disabled="disabled">
          Open
        </button>
      </slot>
    </HMenuButton>

    <div v-if="open && items.length" ref="container" :class="[ui.container, ui.width]" :style="containerStyle" @mouseenter="onMouseEnter">
      <Transition appear v-bind="ui.transition">
        <div>
          <div v-if="popper.arrow" data-popper-arrow :class="Object.values(ui.arrow)" />

          <HMenuItems :class="[ui.base, ui.divide, ui.ring, ui.rounded, ui.shadow, ui.background, ui.height]" static>
            <div v-for="(subItems, index) of items" :key="index" :class="ui.padding">
              <NuxtLink v-for="(item, subIndex) of subItems" :key="subIndex" v-slot="{ href, target, rel, navigate, isExternal, isActive }" v-bind="getNuxtLinkProps(item)" custom>
                <HMenuItem v-slot="{ active, disabled: itemDisabled, close }" :disabled="item.disabled">
                  <component
                    :is="!!href ? 'a' : 'button'"
                    :href="!itemDisabled ? href : undefined"
                    :rel="rel"
                    :target="target"
                    :class="twMerge(twJoin(ui.item.base, ui.item.padding, ui.item.size, ui.item.rounded, active || isActive ? ui.item.active : ui.item.inactive, itemDisabled && ui.item.disabled), item.class)"
                    @click="onClick($event, item, { href, navigate, close, isExternal })"
                  >
                    <slot :name="item.slot || 'item'" :item="item">
                      <UIcon v-if="item.icon" :name="item.icon" :class="twMerge(twJoin(ui.item.icon.base, active || isActive ? ui.item.icon.active : ui.item.icon.inactive), item.iconClass)" />
                      <UAvatar v-else-if="item.avatar" v-bind="{ size: ui.item.avatar.size, ...item.avatar }" :class="ui.item.avatar.base" />

                      <span :class="twMerge(ui.item.label, item.labelClass)">{{ item.label }}</span>

                      <span v-if="item.shortcuts?.length" :class="ui.item.shortcuts">
                        <UKbd v-for="shortcut of item.shortcuts" :key="shortcut">{{ shortcut }}</UKbd>
                      </span>
                    </slot>
                  </component>
                </HMenuItem>
              </NuxtLink>
            </div>
          </HMenuItems>
        </div>
      </Transition>
    </div>
  </HMenu>
</template>

<script>
import { defineComponent, ref, computed, watch, toRef, onMounted, resolveComponent } from "vue";
import { Menu as HMenu, MenuButton as HMenuButton, MenuItems as HMenuItems, MenuItem as HMenuItem, provideUseId } from "@headlessui/vue";
import { defu } from "defu";
import { twMerge, twJoin } from "tailwind-merge";
import UIcon from "../elements/Icon.vue";
import UAvatar from "../elements/Avatar.vue";
import UKbd from "../elements/Kbd.vue";
import { useUI } from "../../composables/useUI";
import { usePopper } from "../../composables/usePopper";
import { mergeConfig, getNuxtLinkProps } from "../../utils";
import appConfig from "#build/app.config";
import { dropdown } from "#ui/ui.config";
import { useId } from "#imports";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.dropdown, dropdown);
export default defineComponent({
  components: {
    HMenu,
    HMenuButton,
    HMenuItems,
    HMenuItem,
    UIcon,
    UAvatar,
    UKbd
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    openDelay: {
      type: Number,
      default: () => config.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config.default.closeDelay
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
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("dropdown", toRef(props, "ui"), config, toRef(props, "class"));
    const popper = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const menuApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    onMounted(() => {
      const menuProvides = trigger.value?.$.provides;
      if (!menuProvides) {
        return;
      }
      const menuProvidesSymbols = Object.getOwnPropertySymbols(menuProvides);
      menuApi.value = menuProvidesSymbols.length && menuProvides[menuProvidesSymbols[0]];
      if (props.open) {
        menuApi.value?.openMenu();
      }
    });
    const containerStyle = computed(() => {
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = props.popper?.offsetDistance || ui.value.popper?.offsetDistance || 8;
      const placement = popper.value.placement?.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart(event) {
      if (!event.cancelable || !menuApi.value) {
        return;
      }
      if (menuApi.value.menuState === 0) {
        menuApi.value.closeMenu();
      } else {
        menuApi.value.openMenu();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (menuApi.value.menuState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        menuApi.value.openMenu && menuApi.value.openMenu();
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (menuApi.value.menuState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        menuApi.value.closeMenu && menuApi.value.closeMenu();
        closeTimeout = null;
      }, props.closeDelay);
    }
    function onClick(e, item, { href, navigate, close, isExternal }) {
      if (item.click) {
        item.click(e);
      }
      if (href && !isExternal) {
        navigate(e);
        close();
      }
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!menuApi.value) return;
      if (oldValue === void 0 || newValue === oldValue) return;
      if (newValue) {
        menuApi.value.openMenu();
      } else {
        menuApi.value.closeMenu();
      }
    });
    watch(() => menuApi.value?.menuState, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue) return;
      emit("update:open", newValue === 0);
    });
    const NuxtLink = resolveComponent("NuxtLink");
    provideUseId(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave,
      onClick,
      getNuxtLinkProps,
      twMerge,
      twJoin,
      NuxtLink
    };
  }
});
</script>
