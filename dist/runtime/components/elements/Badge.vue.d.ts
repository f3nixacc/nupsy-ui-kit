import type { PropType } from 'vue';
import type { BadgeColor, BadgeSize, BadgeVariant, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<BadgeSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<BadgeColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<BadgeVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    label: {
        type: (StringConstructor | NumberConstructor)[];
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
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    badgeClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<BadgeSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<BadgeColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<BadgeVariant>;
        default: () => any;
        validator(value: string): boolean;
    };
    label: {
        type: (StringConstructor | NumberConstructor)[];
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
    size: BadgeSize;
    class: any;
    color: any;
    variant: BadgeVariant;
    label: string | number;
    ui: any;
}, {}>;
export default _default;
