import type { PropType } from 'vue';
import type { ButtonColor, ButtonSize, ButtonVariant, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ButtonSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<ButtonColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<ButtonVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: any;
    };
    trailingIcon: {
        type: StringConstructor;
        default: any;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    truncate: {
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
    to: {
        readonly type: PropType<import("vue-router").RouteLocationRaw>;
        readonly default: any;
        readonly required: false;
    };
    href: {
        readonly type: PropType<import("vue-router").RouteLocationRaw>;
        readonly default: any;
        readonly required: false;
    };
    target: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["target"]>;
        readonly default: any;
        readonly required: false;
    };
    rel: {
        readonly type: PropType<any>;
        readonly default: any;
        readonly required: false;
    };
    noRel: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["noRel"]>;
        readonly default: any;
        readonly required: false;
    };
    prefetch: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["prefetch"]>;
        readonly default: any;
        readonly required: false;
    };
    noPrefetch: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["noPrefetch"]>;
        readonly default: any;
        readonly required: false;
    };
    activeClass: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["activeClass"]>;
        readonly default: any;
        readonly required: false;
    };
    exactActiveClass: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["exactActiveClass"]>;
        readonly default: any;
        readonly required: false;
    };
    prefetchedClass: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["prefetchedClass"]>;
        readonly default: any;
        readonly required: false;
    };
    replace: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["replace"]>;
        readonly default: any;
        readonly required: false;
    };
    ariaCurrentValue: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["ariaCurrentValue"]>;
        readonly default: any;
        readonly required: false;
    };
    external: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["external"]>;
        readonly default: any;
        readonly required: false;
    };
}, {
    ui: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    isLeading: import("vue").ComputedRef<string | true>;
    isTrailing: import("vue").ComputedRef<string | true>;
    isSquare: import("vue").ComputedRef<boolean>;
    buttonClass: import("vue").ComputedRef<string>;
    leadingIconName: import("vue").ComputedRef<string>;
    trailingIconName: import("vue").ComputedRef<string>;
    leadingIconClass: import("vue").ComputedRef<string>;
    trailingIconClass: import("vue").ComputedRef<string>;
    linkProps: import("vue").ComputedRef<{}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ButtonSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<ButtonColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<ButtonVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: any;
    };
    trailingIcon: {
        type: StringConstructor;
        default: any;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    truncate: {
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
    to: {
        readonly type: PropType<import("vue-router").RouteLocationRaw>;
        readonly default: any;
        readonly required: false;
    };
    href: {
        readonly type: PropType<import("vue-router").RouteLocationRaw>;
        readonly default: any;
        readonly required: false;
    };
    target: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["target"]>;
        readonly default: any;
        readonly required: false;
    };
    rel: {
        readonly type: PropType<any>;
        readonly default: any;
        readonly required: false;
    };
    noRel: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["noRel"]>;
        readonly default: any;
        readonly required: false;
    };
    prefetch: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["prefetch"]>;
        readonly default: any;
        readonly required: false;
    };
    noPrefetch: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["noPrefetch"]>;
        readonly default: any;
        readonly required: false;
    };
    activeClass: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["activeClass"]>;
        readonly default: any;
        readonly required: false;
    };
    exactActiveClass: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["exactActiveClass"]>;
        readonly default: any;
        readonly required: false;
    };
    prefetchedClass: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["prefetchedClass"]>;
        readonly default: any;
        readonly required: false;
    };
    replace: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["replace"]>;
        readonly default: any;
        readonly required: false;
    };
    ariaCurrentValue: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["ariaCurrentValue"]>;
        readonly default: any;
        readonly required: false;
    };
    external: {
        readonly type: PropType<import("nuxt/app").NuxtLinkProps["external"]>;
        readonly default: any;
        readonly required: false;
    };
}>>, {
    size: ButtonSize;
    type: string;
    replace: boolean;
    class: any;
    truncate: boolean;
    target: "_blank" | "_parent" | "_self" | "_top" | (string & {});
    to: any;
    activeClass: string;
    exactActiveClass: string;
    ariaCurrentValue: "page" | "step" | "location" | "date" | "time" | "true" | "false";
    noRel: boolean;
    prefetch: boolean;
    noPrefetch: boolean;
    prefetchedClass: string;
    external: boolean;
    leading: boolean;
    color: any;
    variant: ButtonVariant;
    disabled: boolean;
    href: any;
    rel: any;
    label: string;
    ui: any;
    block: boolean;
    loading: boolean;
    padded: boolean;
    icon: string;
    loadingIcon: string;
    leadingIcon: string;
    trailingIcon: string;
    trailing: boolean;
    square: boolean;
}, {}>;
export default _default;
