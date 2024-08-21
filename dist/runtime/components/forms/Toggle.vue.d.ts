import type { PropType } from 'vue';
import type { ToggleSize, ToggleColor, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: any;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    onIcon: {
        type: StringConstructor;
        default: () => any;
    };
    offIcon: {
        type: StringConstructor;
        default: () => any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    color: {
        type: PropType<ToggleColor>;
        default: () => any;
        validator(value: string): any;
    };
    size: {
        type: PropType<ToggleSize>;
        default: () => any;
        validator(value: string): boolean;
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
    ui: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    name: import("vue").ComputedRef<string>;
    inputId: import("vue").ComputedRef<string>;
    active: import("vue").WritableComputedRef<boolean>;
    switchClass: import("vue").ComputedRef<string>;
    containerClass: import("vue").ComputedRef<string>;
    onIconClass: import("vue").ComputedRef<string>;
    offIconClass: import("vue").ComputedRef<string>;
    loadingIconClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    onIcon: {
        type: StringConstructor;
        default: () => any;
    };
    offIcon: {
        type: StringConstructor;
        default: () => any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    color: {
        type: PropType<ToggleColor>;
        default: () => any;
        validator(value: string): any;
    };
    size: {
        type: PropType<ToggleSize>;
        default: () => any;
        validator(value: string): boolean;
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
    size: ToggleSize;
    class: any;
    color: any;
    disabled: boolean;
    ui: any;
    loading: boolean;
    loadingIcon: string;
    id: string;
    modelValue: boolean;
    onIcon: string;
    offIcon: string;
}, {}>;
export default _default;
