import type { PropType } from 'vue';
import type { Strategy } from '../../types/index.js';
import colors from '#ui-colors';
declare const config: any;
declare const configRadio: any;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    legend: {
        type: StringConstructor;
        default: any;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
    };
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<(typeof colors)[number]>;
        default: () => any;
        validator(value: string): any;
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
    uiRadio: {
        type: PropType<Partial<typeof configRadio> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}, {
    ui: import("vue").ComputedRef<any>;
    uiRadio: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    normalizedOptions: import("vue").ComputedRef<any[]>;
    onUpdate: (value: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: any;
    };
    legend: {
        type: StringConstructor;
        default: any;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
    };
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<(typeof colors)[number]>;
        default: () => any;
        validator(value: string): any;
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
    uiRadio: {
        type: PropType<Partial<typeof configRadio> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    name: string;
    class: any;
    color: any;
    disabled: boolean;
    legend: string;
    ui: any;
    modelValue: string | number | boolean | Record<string, any>;
    options: unknown[];
    optionAttribute: string;
    valueAttribute: string;
    uiRadio: any;
}, {}>;
export default _default;
