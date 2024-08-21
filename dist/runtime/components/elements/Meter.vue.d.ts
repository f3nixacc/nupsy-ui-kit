import type { SlotsType, PropType } from 'vue';
import type { Strategy, MeterColor, MeterSize } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    value: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: PropType<MeterSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<MeterColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    icon: {
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
    ui: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    indicatorContainerClass: import("vue").ComputedRef<string>;
    indicatorClass: import("vue").ComputedRef<string>;
    meterClass: import("vue").ComputedRef<string>;
    meterAppearanceClass: import("vue").ComputedRef<string>;
    meterBarClass: import("vue").ComputedRef<string>;
    labelClass: import("vue").ComputedRef<string>;
    normalizedMin: import("vue").ComputedRef<number>;
    normalizedMax: import("vue").ComputedRef<number>;
    percent: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: PropType<MeterSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<MeterColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    icon: {
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
}>>, {
    size: "xs" | "sm" | "2xs" | "md" | "lg" | "xl" | "2xl";
    class: any;
    color: any;
    label: string;
    ui: any;
    icon: string;
    value: number;
    max: number;
    indicator: boolean;
    min: number;
}, SlotsType<{
    indicator?: {
        percent: number;
        value: number;
    };
    label?: {
        percent: number;
        value: number;
    };
}>>;
export default _default;
