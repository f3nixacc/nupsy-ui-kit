import type { PropType } from 'vue';
import { twJoin } from 'tailwind-merge';
import type { BreadcrumbLink, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    links: {
        type: PropType<BreadcrumbLink[]>;
        default: () => any[];
    };
    divider: {
        type: StringConstructor;
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
    getULinkProps: (props: any) => {};
    twMerge: (...classLists: import("tailwind-merge").ClassNameValue[]) => string;
    twJoin: typeof twJoin;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    links: {
        type: PropType<BreadcrumbLink[]>;
        default: () => any[];
    };
    divider: {
        type: StringConstructor;
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
}>>, {
    class: any;
    ui: any;
    divider: string;
    links: BreadcrumbLink[];
}, {}>;
export default _default;
