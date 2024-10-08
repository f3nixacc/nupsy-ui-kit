import type { VNode, SlotsType, PropType } from 'vue';
import Meter from './Meter.vue.js';
import type { Strategy, MeterSize } from '../../types/index.js';
declare const meterGroupConfig: any;
declare const _default: import("vue").DefineComponent<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: PropType<MeterSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof meterGroupConfig> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: PropType<MeterSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof meterGroupConfig> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>>, {
    size: "xs" | "sm" | "2xs" | "md" | "lg" | "xl" | "2xl";
    ui: any;
    icon: string;
    class: any;
    max: number;
    min: number;
    indicator: boolean;
}, SlotsType<{
    default?: (typeof Meter)[];
    indicator?: {
        percent: number;
    };
}>>;
export default _default;
