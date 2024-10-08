<template>
  <HCombobox
    :by="by"
    :model-value="modelValue"
    :multiple="multiple"
    :nullable="nullable"
    :class="ui.wrapper"
    v-bind="attrs"
    as="div"
    @update:model-value="onSelect"
  >
    <div v-show="searchable" :class="ui.input.wrapper">
      <UIcon v-if="iconName" :name="iconName" :class="iconClass" aria-hidden="true" />
      <HComboboxInput
        ref="comboboxInput"
        :value="query"
        :class="[ui.input.base, ui.input.size, ui.input.height, ui.input.padding, icon && ui.input.icon.padding, closeButton && ui.input.closeButton.padding]"
        :placeholder="placeholder"
        :aria-label="placeholder"
        autocomplete="off"
        @change="query = $event.target.value"
      />

      <UButton v-if="closeButton" aria-label="Close" v-bind="{ ...(ui.default.closeButton || {}), ...closeButton }" :class="ui.input.closeButton.base" @click="onClear" />
    </div>

    <HComboboxOptions
      v-if="groups.length"
      static
      hold
      as="div"
      aria-label="Commands"
      :class="ui.container"
    >
      <CommandPaletteGroup
        v-for="group of groups"
        :key="group.key"
        :query="query"
        :group="group"
        :group-attribute="groupAttribute"
        :command-attribute="commandAttribute"
        :selected-icon="selectedIcon"
        :ui="ui"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </CommandPaletteGroup>
    </HComboboxOptions>

    <template v-else-if="emptyState">
      <slot name="empty-state">
        <div :class="ui.emptyState.wrapper">
          <UIcon v-if="emptyState.icon" :name="emptyState.icon" :class="ui.emptyState.icon" aria-hidden="true" />
          <p :class="query ? ui.emptyState.queryLabel : ui.emptyState.label">
            {{ query ? emptyState.queryLabel : emptyState.label }}
          </p>
        </div>
      </slot>
    </template>
  </HCombobox>
</template>

<script>
import { ref, computed, watch, toRef, onMounted, defineComponent } from "vue";
import { Combobox as HCombobox, ComboboxInput as HComboboxInput, ComboboxOptions as HComboboxOptions, provideUseId } from "@headlessui/vue";
import { useDebounceFn } from "@vueuse/core";
import { useFuse } from "@vueuse/integrations/useFuse";
import { twJoin } from "tailwind-merge";
import { defu } from "defu";
import UIcon from "../elements/Icon.vue";
import UButton from "../elements/Button.vue";
import CommandPaletteGroup from "./CommandPaletteGroup.vue";
import { useUI } from "../../composables/useUI";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { commandPalette } from "#ui/ui.config";
import { useId } from "#imports";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.commandPalette, commandPalette);
export default defineComponent({
  components: {
    HCombobox,
    HComboboxInput,
    HComboboxOptions,
    UIcon,
    UButton,
    CommandPaletteGroup
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: null
    },
    by: {
      type: String,
      default: "id"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    nullable: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    groups: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: () => config.default.icon
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    selectedIcon: {
      type: String,
      default: () => config.default.selectedIcon
    },
    closeButton: {
      type: Object,
      default: () => config.default.closeButton
    },
    emptyState: {
      type: Object,
      default: () => config.default.emptyState
    },
    placeholder: {
      type: String,
      default: "Search..."
    },
    groupAttribute: {
      type: String,
      default: "label"
    },
    commandAttribute: {
      type: String,
      default: "label"
    },
    autoselect: {
      type: Boolean,
      default: true
    },
    autoclear: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 200
    },
    fuse: {
      type: Object,
      default: () => ({})
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
  emits: ["update:modelValue", "close"],
  setup(props, { emit, expose }) {
    const { ui, attrs } = useUI("commandPalette", toRef(props, "ui"), config, toRef(props, "class"));
    const query = ref("");
    const comboboxInput = ref();
    const comboboxApi = ref(null);
    const isLoading = ref(false);
    onMounted(() => {
      if (props.autoselect) {
        activateNextOption();
      }
    });
    onMounted(() => {
      setTimeout(() => {
        const popoverProvides = comboboxInput.value?.$.provides;
        if (!popoverProvides) {
          return;
        }
        const popoverProvidesSymbols = Object.getOwnPropertySymbols(popoverProvides);
        comboboxApi.value = popoverProvidesSymbols.length && popoverProvides[popoverProvidesSymbols[0]];
      }, 200);
    });
    const options = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        keys: [props.commandAttribute]
      },
      resultLimit: 12,
      matchAllWhenSearchEmpty: true
    }));
    const commands = computed(() => {
      const commands2 = [];
      for (const group of props.groups) {
        if (!group.search && !group.static) {
          commands2.push(...group.commands?.map((command) => ({ ...command, group: group.key })) || []);
        }
      }
      return commands2;
    });
    const searchResults = ref({});
    const { results } = useFuse(query, commands, options);
    function getGroupWithCommands(group, commands2) {
      if (!group) {
        return;
      }
      if (group.filter && typeof group.filter === "function") {
        commands2 = group.filter(query.value, commands2);
      }
      return {
        ...group,
        commands: commands2.slice(0, options.value.resultLimit)
      };
    }
    const groups = computed(() => {
      if (!results.value) {
        return [];
      }
      const groupedCommands = results.value.reduce((acc, command) => {
        const { item, ...data } = command;
        if (!item.group) {
          return acc;
        }
        acc[item.group] ||= [];
        acc[item.group].push({ ...item, ...data });
        return acc;
      }, {});
      const groups2 = Object.entries(groupedCommands).map(([key, commands2]) => {
        const group = props.groups.find((group2) => group2.key === key);
        if (!group) {
          return null;
        }
        return getGroupWithCommands(group, commands2);
      }).filter(Boolean);
      const searchGroups = props.groups.filter((group) => !!group.search && searchResults.value[group.key]?.length).map((group) => {
        const commands2 = searchResults.value[group.key] || [];
        return getGroupWithCommands(group, [...commands2]);
      });
      const staticGroups = props.groups.filter((group) => group.static && group.commands?.length).map((group) => {
        return getGroupWithCommands(group, group.commands);
      });
      return [
        ...groups2,
        ...searchGroups,
        ...staticGroups
      ];
    });
    const debouncedSearch = useDebounceFn(async () => {
      const searchableGroups = props.groups.filter((group) => !!group.search);
      if (!searchableGroups.length) {
        return;
      }
      isLoading.value = true;
      await Promise.all(searchableGroups.map(async (group) => {
        searchResults.value[group.key] = await group.search(query.value);
      }));
      isLoading.value = false;
      activateFirstOption();
    }, props.debounce);
    watch(query, () => {
      debouncedSearch();
      activateFirstOption();
    });
    const iconName = computed(() => {
      if ((props.loading || isLoading.value) && props.loadingIcon) {
        return props.loadingIcon;
      }
      return props.icon;
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.input.icon.base,
        ui.value.input.icon.size,
        (props.loading || isLoading.value) && props.loadingIcon && ui.value.input.icon.loading
      );
    });
    const emptyState = computed(() => {
      if (props.emptyState === null) return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    function activateFirstOption() {
      setTimeout(() => {
        comboboxInput.value?.$el.dispatchEvent(new KeyboardEvent("keydown", { key: "PageUp" }));
      }, 0);
    }
    function activateNextOption() {
      setTimeout(() => {
        comboboxInput.value?.$el.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
      }, 0);
    }
    function onSelect(option) {
      emit("update:modelValue", option, { query: query.value });
      if (props.autoclear) {
        setTimeout(() => {
          query.value = "";
        }, 0);
      }
    }
    function onClear() {
      if (query.value) {
        query.value = "";
      } else {
        emit("close");
      }
    }
    expose({
      query,
      updateQuery: (q) => {
        query.value = q;
      },
      comboboxApi,
      results
    });
    provideUseId(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      groups,
      comboboxInput,
      query,
      iconName,
      iconClass,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      onSelect,
      onClear
    };
  }
});
</script>
