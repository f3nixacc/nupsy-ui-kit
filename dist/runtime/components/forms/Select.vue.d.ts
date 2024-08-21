import type { PropType, ComputedRef } from 'vue';
import type { SelectSize, SelectColor, SelectVariant, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
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
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
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
        default: string;
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
}, {
    ui: ComputedRef<any>;
    attrs: ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    name: ComputedRef<string>;
    inputId: ComputedRef<string>;
    normalizedOptionsWithPlaceholder: ComputedRef<{
        disabled?: boolean;
        children: {
            disabled?: boolean;
        }[];
    }[]>;
    normalizedValue: ComputedRef<any>;
    isLeading: ComputedRef<string | true>;
    isTrailing: ComputedRef<string | true>;
    selectClass: ComputedRef<string>;
    leadingIconName: ComputedRef<string>;
    leadingIconClass: ComputedRef<string>;
    leadingWrapperIconClass: ComputedRef<string>;
    trailingIconName: ComputedRef<string>;
    trailingIconClass: ComputedRef<string>;
    trailingWrapperIconClass: ComputedRef<string>;
    onInput: (event: Event) => void;
    onChange: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
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
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
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
        default: string;
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
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    name: string;
    size: SelectSize;
    required: boolean;
    class: any;
    leading: boolean;
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
    modelValue: string | number | Record<string, any>;
    placeholder: string;
    options: unknown[];
    optionAttribute: string;
    valueAttribute: string;
    selectClass: string;
}, {}>;
export default _default;
