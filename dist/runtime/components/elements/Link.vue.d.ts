declare const _default: import("vue").DefineComponent<{
    as: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    exactQuery: {
        type: BooleanConstructor;
        default: boolean;
    };
    exactHash: {
        type: BooleanConstructor;
        default: boolean;
    };
    inactiveClass: {
        type: StringConstructor;
        default: any;
    };
    to: {
        readonly type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
        readonly default: any;
        readonly required: false;
    };
    href: {
        readonly type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
        readonly default: any;
        readonly required: false;
    };
    target: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["target"]>;
        readonly default: any;
        readonly required: false;
    };
    rel: {
        readonly type: import("vue").PropType<any>;
        readonly default: any;
        readonly required: false;
    };
    noRel: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["noRel"]>;
        readonly default: any;
        readonly required: false;
    };
    prefetch: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["prefetch"]>;
        readonly default: any;
        readonly required: false;
    };
    noPrefetch: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["noPrefetch"]>;
        readonly default: any;
        readonly required: false;
    };
    activeClass: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["activeClass"]>;
        readonly default: any;
        readonly required: false;
    };
    exactActiveClass: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["exactActiveClass"]>;
        readonly default: any;
        readonly required: false;
    };
    prefetchedClass: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["prefetchedClass"]>;
        readonly default: any;
        readonly required: false;
    };
    replace: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["replace"]>;
        readonly default: any;
        readonly required: false;
    };
    ariaCurrentValue: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["ariaCurrentValue"]>;
        readonly default: any;
        readonly required: false;
    };
    external: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["external"]>;
        readonly default: any;
        readonly required: false;
    };
}, {
    resolveLinkClass: (route: any, $route: any, { isActive, isExactActive }: {
        isActive: boolean;
        isExactActive: boolean;
    }) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    as: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    exactQuery: {
        type: BooleanConstructor;
        default: boolean;
    };
    exactHash: {
        type: BooleanConstructor;
        default: boolean;
    };
    inactiveClass: {
        type: StringConstructor;
        default: any;
    };
    to: {
        readonly type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
        readonly default: any;
        readonly required: false;
    };
    href: {
        readonly type: import("vue").PropType<import("vue-router").RouteLocationRaw>;
        readonly default: any;
        readonly required: false;
    };
    target: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["target"]>;
        readonly default: any;
        readonly required: false;
    };
    rel: {
        readonly type: import("vue").PropType<any>;
        readonly default: any;
        readonly required: false;
    };
    noRel: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["noRel"]>;
        readonly default: any;
        readonly required: false;
    };
    prefetch: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["prefetch"]>;
        readonly default: any;
        readonly required: false;
    };
    noPrefetch: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["noPrefetch"]>;
        readonly default: any;
        readonly required: false;
    };
    activeClass: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["activeClass"]>;
        readonly default: any;
        readonly required: false;
    };
    exactActiveClass: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["exactActiveClass"]>;
        readonly default: any;
        readonly required: false;
    };
    prefetchedClass: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["prefetchedClass"]>;
        readonly default: any;
        readonly required: false;
    };
    replace: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["replace"]>;
        readonly default: any;
        readonly required: false;
    };
    ariaCurrentValue: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["ariaCurrentValue"]>;
        readonly default: any;
        readonly required: false;
    };
    external: {
        readonly type: import("vue").PropType<import("nuxt/app").NuxtLinkProps["external"]>;
        readonly default: any;
        readonly required: false;
    };
}>>, {
    type: string;
    replace: boolean;
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
    as: string;
    disabled: boolean;
    active: boolean;
    exact: boolean;
    exactQuery: boolean;
    exactHash: boolean;
    inactiveClass: string;
    href: any;
    rel: any;
}, {}>;
export default _default;
