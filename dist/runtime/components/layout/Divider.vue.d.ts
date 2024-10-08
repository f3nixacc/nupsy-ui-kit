import type { PropType } from 'vue';
import type { Avatar, DividerSize, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    avatar: {
        type: PropType<Avatar>;
        default: any;
    };
    size: {
        type: PropType<DividerSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (value: string) => boolean;
    };
    type: {
        type: PropType<"solid" | "dotted" | "dashed">;
        default: string;
        validator: (value: string) => boolean;
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
    wrapperClass: import("vue").ComputedRef<string>;
    containerClass: import("vue").ComputedRef<string>;
    borderClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    avatar: {
        type: PropType<Avatar>;
        default: any;
    };
    size: {
        type: PropType<DividerSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (value: string) => boolean;
    };
    type: {
        type: PropType<"solid" | "dotted" | "dashed">;
        default: string;
        validator: (value: string) => boolean;
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
    size: DividerSize;
    type: "solid" | "dotted" | "dashed";
    class: any;
    avatar: any;
    label: string;
    ui: any;
    orientation: "horizontal" | "vertical";
    icon: string;
}, {}>;
export default _default;
