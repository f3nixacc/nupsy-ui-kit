import type { PropType } from 'vue';
import type { RouteLocationRaw } from '#vue-router';
import type { Button, ButtonSize, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
        validate(value: any): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ButtonSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    to: {
        type: PropType<(page: number) => RouteLocationRaw>;
        default: any;
    };
    activeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    inactiveButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    showFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLast: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    lastButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    prevButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    nextButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    divider: {
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
    currentPage: import("vue").WritableComputedRef<number>;
    pages: import("vue").ComputedRef<number[]>;
    displayedPages: import("vue").ComputedRef<(string | number)[]>;
    canGoLastOrNext: import("vue").ComputedRef<boolean>;
    canGoFirstOrPrev: import("vue").ComputedRef<boolean>;
    onClickPrev: () => void;
    onClickNext: () => void;
    onClickPage: (page: number | string) => void;
    onClickFirst: () => void;
    onClickLast: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
        validate(value: any): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ButtonSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    to: {
        type: PropType<(page: number) => RouteLocationRaw>;
        default: any;
    };
    activeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    inactiveButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    showFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLast: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    lastButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    prevButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    nextButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    divider: {
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
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    size: ButtonSize;
    class: any;
    to: (page: number) => RouteLocationRaw;
    disabled: boolean;
    ui: any;
    max: number;
    prevButton: Button;
    nextButton: Button;
    divider: string;
    pageCount: number;
    activeButton: Button;
    inactiveButton: Button;
    showFirst: boolean;
    showLast: boolean;
    firstButton: Button;
    lastButton: Button;
}, {}>;
export default _default;
