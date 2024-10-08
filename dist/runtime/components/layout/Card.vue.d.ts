import type { PropType } from 'vue';
import type { Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    as: {
        type: StringConstructor;
        default: string;
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
    cardClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    as: {
        type: StringConstructor;
        default: string;
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
    as: string;
    ui: any;
}, {}>;
export default _default;
