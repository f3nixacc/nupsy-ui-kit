import type { PropType } from 'vue';
import type { PopperOptions, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: any;
    };
    prevent: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortcuts: {
        type: PropType<string[]>;
        default: () => any[];
    };
    openDelay: {
        type: NumberConstructor;
        default: () => any;
    };
    closeDelay: {
        type: NumberConstructor;
        default: () => any;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
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
    popper: import("vue").ComputedRef<PopperOptions>;
    trigger: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    container: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    open: import("vue").Ref<boolean>;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: any;
    };
    prevent: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortcuts: {
        type: PropType<string[]>;
        default: () => any[];
    };
    openDelay: {
        type: NumberConstructor;
        default: () => any;
    };
    closeDelay: {
        type: NumberConstructor;
        default: () => any;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
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
}>>, {
    class: any;
    popper: PopperOptions;
    text: string;
    ui: any;
    openDelay: number;
    closeDelay: number;
    prevent: boolean;
    shortcuts: string[];
}, {}>;
export default _default;
