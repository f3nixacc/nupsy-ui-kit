import type { PropType } from 'vue';
import type { TextareaSize, TextareaColor, TextareaVariant, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
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
    rows: {
        type: NumberConstructor;
        default: number;
    };
    maxrows: {
        type: NumberConstructor;
        default: number;
    };
    autoresize: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocusDelay: {
        type: NumberConstructor;
        default: number;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<TextareaSize>;
        default: any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<TextareaColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<TextareaVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    textareaClass: {
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
    modelModifiers: {
        type: PropType<{
            trim?: boolean;
            lazy?: boolean;
            number?: boolean;
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
    textarea: import("vue").Ref<HTMLTextAreaElement>;
    textareaClass: import("vue").ComputedRef<string>;
    onInput: (event: Event) => void;
    onChange: (event: Event) => void;
    onBlur: (event: FocusEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "update:modelValue")[], "blur" | "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
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
    rows: {
        type: NumberConstructor;
        default: number;
    };
    maxrows: {
        type: NumberConstructor;
        default: number;
    };
    autoresize: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocusDelay: {
        type: NumberConstructor;
        default: number;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<TextareaSize>;
        default: any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<TextareaColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<TextareaVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    textareaClass: {
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
    modelModifiers: {
        type: PropType<{
            trim?: boolean;
            lazy?: boolean;
            number?: boolean;
        }>;
        default: () => {};
    };
}>> & {
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    name: string;
    size: TextareaSize;
    required: boolean;
    class: any;
    resize: boolean;
    color: any;
    variant: TextareaVariant;
    disabled: boolean;
    ui: any;
    padded: boolean;
    id: string;
    modelValue: string | number;
    rows: number;
    placeholder: string;
    autofocus: boolean;
    autofocusDelay: number;
    modelModifiers: {};
    maxrows: number;
    autoresize: boolean;
    textareaClass: string;
}, {}>;
export default _default;
