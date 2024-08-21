import type { Ref, PropType } from 'vue';
import type { FormGroupSize, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: PropType<FormGroupSize>;
        default: any;
        validator(value: string): boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: any;
    };
    error: {
        type: (StringConstructor | BooleanConstructor)[];
        default: any;
    };
    hint: {
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
    eagerValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    ui: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    inputId: Ref<string>;
    size: import("vue").ComputedRef<any>;
    error: import("vue").ComputedRef<string | boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: PropType<FormGroupSize>;
        default: any;
        validator(value: string): boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: any;
    };
    error: {
        type: (StringConstructor | BooleanConstructor)[];
        default: any;
    };
    hint: {
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
    eagerValidation: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    name: string;
    size: FormGroupSize;
    required: boolean;
    class: any;
    label: string;
    ui: any;
    help: string;
    description: string;
    error: string | boolean;
    hint: string;
    eagerValidation: boolean;
}, {}>;
export default _default;
