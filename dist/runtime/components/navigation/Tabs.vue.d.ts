import type { PropType } from 'vue';
import type { TabItem, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: any;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (value: string) => boolean;
    };
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: PropType<TabItem[]>;
        default: () => any[];
    };
    unmount: {
        type: BooleanConstructor;
        default: boolean;
    };
    content: {
        type: BooleanConstructor;
        default: boolean;
    };
    class: {
        type: PropType<any>;
        default: () => string;
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
    listRef: import("vue").Ref<HTMLElement>;
    itemRefs: import("vue").Ref<HTMLElement[]>;
    markerRef: import("vue").Ref<HTMLElement>;
    selectedIndex: import("vue").Ref<number>;
    onChange: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: any;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (value: string) => boolean;
    };
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: PropType<TabItem[]>;
        default: () => any[];
    };
    unmount: {
        type: BooleanConstructor;
        default: boolean;
    };
    content: {
        type: BooleanConstructor;
        default: boolean;
    };
    class: {
        type: PropType<any>;
        default: () => string;
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
    class: any;
    content: boolean;
    ui: any;
    orientation: "horizontal" | "vertical";
    modelValue: number;
    unmount: boolean;
    items: TabItem[];
    defaultIndex: number;
}, {}>;
export default _default;
