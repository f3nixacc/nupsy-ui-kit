import type { PropType } from 'vue';
import type { SelectSize, SelectColor, SelectVariant, PopperOptions, Strategy } from '../../types/index.js';
declare const config: any;
declare const configMenu: any;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
        default: string;
    };
    query: {
        type: StringConstructor;
        default: any;
    };
    by: {
        type: StringConstructor;
        default: any;
    };
    options: {
        type: PropType<{
            [key: string]: any;
            disabled?: boolean;
        }[] | string[]>;
        default: () => any[];
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: any;
    };
    trailingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedIcon: {
        type: StringConstructor;
        default: () => any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: PropType<boolean | ((query: string) => Promise<any[]> | any[])>;
        default: boolean;
    };
    searchablePlaceholder: {
        type: StringConstructor;
        default: string;
    };
    searchableLazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearSearchOnClose: {
        type: BooleanConstructor;
        default: () => any;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    creatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCreateOptionWhen: {
        type: PropType<"always" | "empty" | ((query: string, results: any[]) => boolean)>;
        default: () => any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<SelectSize>;
        default: any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<SelectColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<SelectVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: any;
    };
    searchAttributes: {
        type: ArrayConstructor;
        default: any;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    selectClass: {
        type: StringConstructor;
        default: any;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof config> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
    uiMenu: {
        type: PropType<Partial<typeof configMenu> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}, {
    ui: import("vue").ComputedRef<any>;
    uiMenu: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    name: import("vue").ComputedRef<string>;
    inputId: import("vue").ComputedRef<string>;
    popper: import("vue").ComputedRef<PopperOptions>;
    trigger: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    container: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    selected: import("vue").ComputedRef<any>;
    label: import("vue").ComputedRef<any>;
    isLeading: import("vue").ComputedRef<string | true>;
    isTrailing: import("vue").ComputedRef<string | true>;
    selectClass: import("vue").ComputedRef<string>;
    leadingIconName: import("vue").ComputedRef<string>;
    leadingIconClass: import("vue").ComputedRef<string>;
    leadingWrapperIconClass: import("vue").ComputedRef<string>;
    trailingIconName: import("vue").ComputedRef<string>;
    trailingIconClass: import("vue").ComputedRef<string>;
    trailingWrapperIconClass: import("vue").ComputedRef<string>;
    filteredOptions: import("vue").ComputedRef<any[]>;
    createOption: import("vue").ComputedRef<string | {
        [x: string]: string;
    }>;
    query: import("vue").WritableComputedRef<string>;
    onUpdate: (value: any) => void;
    onQueryChange: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "open" | "close" | "update:query")[], "change" | "update:modelValue" | "open" | "close" | "update:query", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
        default: string;
    };
    query: {
        type: StringConstructor;
        default: any;
    };
    by: {
        type: StringConstructor;
        default: any;
    };
    options: {
        type: PropType<{
            [key: string]: any;
            disabled?: boolean;
        }[] | string[]>;
        default: () => any[];
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: any;
    };
    trailingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedIcon: {
        type: StringConstructor;
        default: () => any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: PropType<boolean | ((query: string) => Promise<any[]> | any[])>;
        default: boolean;
    };
    searchablePlaceholder: {
        type: StringConstructor;
        default: string;
    };
    searchableLazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearSearchOnClose: {
        type: BooleanConstructor;
        default: () => any;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    creatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCreateOptionWhen: {
        type: PropType<"always" | "empty" | ((query: string, results: any[]) => boolean)>;
        default: () => any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<SelectSize>;
        default: any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<SelectColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<SelectVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: any;
    };
    searchAttributes: {
        type: ArrayConstructor;
        default: any;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    selectClass: {
        type: StringConstructor;
        default: any;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof config> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
    uiMenu: {
        type: PropType<Partial<typeof configMenu> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    "onUpdate:query"?: (...args: any[]) => any;
}, {
    name: string;
    size: SelectSize;
    required: boolean;
    class: any;
    leading: boolean;
    popper: PopperOptions;
    color: any;
    variant: SelectVariant;
    disabled: boolean;
    ui: any;
    loading: boolean;
    padded: boolean;
    icon: string;
    loadingIcon: string;
    leadingIcon: string;
    trailingIcon: string;
    trailing: boolean;
    id: string;
    modelValue: string | number | boolean | Record<string, any> | unknown[];
    by: string;
    multiple: boolean;
    placeholder: string;
    options: string[] | {
        [key: string]: any;
        disabled?: boolean;
    }[];
    query: string;
    selectedIcon: string;
    optionAttribute: string;
    valueAttribute: string;
    searchAttributes: unknown[];
    debounce: number;
    uiMenu: any;
    selectClass: string;
    searchable: boolean | ((query: string) => Promise<any[]> | any[]);
    searchablePlaceholder: string;
    searchableLazy: boolean;
    clearSearchOnClose: boolean;
    creatable: boolean;
    showCreateOptionWhen: "empty" | "always" | ((query: string, results: any[]) => boolean);
}, {}>;
export default _default;
