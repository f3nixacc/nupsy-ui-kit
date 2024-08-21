import type { PropType } from 'vue';
import type { ChipSize, ChipColor, ChipPosition, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<ChipSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<ChipColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    position: {
        type: PropType<ChipPosition>;
        default: () => any;
        validator(value: string): boolean;
    };
    text: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    inset: {
        type: BooleanConstructor;
        default: () => any;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
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
    chipClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<ChipSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<ChipColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    position: {
        type: PropType<ChipPosition>;
        default: () => any;
        validator(value: string): boolean;
    };
    text: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    inset: {
        type: BooleanConstructor;
        default: () => any;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
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
}>>, {
    size: "xs" | "sm" | "2xs" | "md" | "lg" | "xl" | "2xl" | "3xs" | "3xl";
    class: any;
    inset: boolean;
    position: "top-right" | "bottom-right" | "top-left" | "bottom-left";
    color: any;
    text: string | number;
    ui: any;
    show: boolean;
}, {}>;
export default _default;
