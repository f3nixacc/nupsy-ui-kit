import type { PropType } from 'vue';
import { twJoin } from 'tailwind-merge';
import type { DropdownItem, PopperOptions, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<DropdownItem[][]>;
        default: () => any[];
    };
    mode: {
        type: PropType<"click" | "hover">;
        default: string;
        validator: (value: string) => boolean;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    openDelay: {
        type: NumberConstructor;
        default: () => any;
    };
    closeDelay: {
        type: NumberConstructor;
        default: () => any;
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
    containerStyle: import("vue").ComputedRef<{
        paddingTop?: undefined;
        paddingBottom?: undefined;
        paddingLeft?: undefined;
        paddingRight?: undefined;
    } | {
        paddingTop: string;
        paddingBottom: string;
        paddingLeft?: undefined;
        paddingRight?: undefined;
    } | {
        paddingLeft: string;
        paddingRight: string;
        paddingTop?: undefined;
        paddingBottom?: undefined;
    } | {
        paddingTop: string;
        paddingBottom: string;
        paddingLeft: string;
        paddingRight: string;
    }>;
    onTouchStart: (event: TouchEvent) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick: (e: any, item: any, { href, navigate, close, isExternal }: {
        href: any;
        navigate: any;
        close: any;
        isExternal: any;
    }) => void;
    getNuxtLinkProps: (props: any) => {};
    twMerge: (...classLists: import("tailwind-merge").ClassNameValue[]) => string;
    twJoin: typeof twJoin;
    NuxtLink: string | import("vue").ConcreteComponent<{}, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:open"[], "update:open", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<DropdownItem[][]>;
        default: () => any[];
    };
    mode: {
        type: PropType<"click" | "hover">;
        default: string;
        validator: (value: string) => boolean;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    openDelay: {
        type: NumberConstructor;
        default: () => any;
    };
    closeDelay: {
        type: NumberConstructor;
        default: () => any;
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
    "onUpdate:open"?: (...args: any[]) => any;
}, {
    mode: "click" | "hover";
    class: any;
    popper: PopperOptions;
    disabled: boolean;
    ui: any;
    open: boolean;
    items: DropdownItem[][];
    openDelay: number;
    closeDelay: number;
}, {}>;
export default _default;
