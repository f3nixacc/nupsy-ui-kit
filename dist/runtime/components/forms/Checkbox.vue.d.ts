import type { PropType } from 'vue';
import type { Strategy } from '../../types/index.js';
import colors from '#ui-colors';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    value: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: any;
    };
    modelValue: {
        type: (BooleanConstructor | ArrayConstructor)[];
        default: any;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: any;
    };
    help: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<(typeof colors)[number]>;
        default: () => any;
        validator(value: string): any;
    };
    inputClass: {
        type: StringConstructor;
        default: string;
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
    toggle: import("vue").WritableComputedRef<boolean | unknown[]>;
    inputId: string;
    name: import("vue").ComputedRef<string>;
    inputClass: import("vue").ComputedRef<string>;
    onChange: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    value: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: any;
    };
    modelValue: {
        type: (BooleanConstructor | ArrayConstructor)[];
        default: any;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: any;
    };
    help: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<(typeof colors)[number]>;
        default: () => any;
        validator(value: string): any;
    };
    inputClass: {
        type: StringConstructor;
        default: string;
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
    required: boolean;
    class: any;
    color: any;
    disabled: boolean;
    label: string;
    ui: any;
    value: string | number | boolean | Record<string, any>;
    id: string;
    modelValue: boolean | unknown[];
    indeterminate: boolean;
    help: string;
    inputClass: string;
}, {}>;
export default _default;
