import type { WritableComputedRef, PropType } from 'vue';
import type { Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    appear: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: PropType<"left" | "right" | "top" | "bottom">;
        default: string;
        validator: (value: string) => boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventClose: {
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
    isOpen: WritableComputedRef<boolean>;
    transitionClass: import("vue").ComputedRef<any>;
    sideType: import("vue").ComputedRef<"right" | "horizontal" | "vertical">;
    onAfterLeave: () => void;
    close: (value: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "close" | "close-prevented" | "after-leave")[], "update:modelValue" | "close" | "close-prevented" | "after-leave", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    appear: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: PropType<"left" | "right" | "top" | "bottom">;
        default: string;
        validator: (value: string) => boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventClose: {
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
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    "onClose-prevented"?: (...args: any[]) => any;
    "onAfter-leave"?: (...args: any[]) => any;
}, {
    class: any;
    transition: boolean;
    ui: any;
    modelValue: boolean;
    appear: boolean;
    overlay: boolean;
    preventClose: boolean;
    side: "bottom" | "left" | "right" | "top";
}, {}>;
export default _default;
