import type { PropType } from 'vue';
import type { Strategy, Button } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<any[]>;
        default: () => any[];
    };
    arrows: {
        type: BooleanConstructor;
        default: boolean;
    };
    indicators: {
        type: BooleanConstructor;
        default: boolean;
    };
    prevButton: {
        type: PropType<Button & {
            class?: string;
        }>;
        default: () => Button & {
            class?: string;
        };
    };
    nextButton: {
        type: PropType<Button & {
            class?: string;
        }>;
        default: () => Button & {
            class?: string;
        };
    };
    class: {
        type: PropType<any>;
        default: () => string;
    };
    ui: {
        type: PropType<Partial<typeof config & {
            strategy?: Strategy;
        }>>;
        default: any;
    };
}, {
    ui: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    isFirst: import("vue").ComputedRef<boolean>;
    isLast: import("vue").ComputedRef<boolean>;
    carouselRef: import("vue").Ref<HTMLElement>;
    pages: import("vue").ComputedRef<number>;
    currentPage: import("vue").ComputedRef<number>;
    onClickNext: () => void;
    onClickPrev: () => void;
    onClick: (page: number) => void;
    twMerge: (...classLists: import("tailwind-merge").ClassNameValue[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<any[]>;
        default: () => any[];
    };
    arrows: {
        type: BooleanConstructor;
        default: boolean;
    };
    indicators: {
        type: BooleanConstructor;
        default: boolean;
    };
    prevButton: {
        type: PropType<Button & {
            class?: string;
        }>;
        default: () => Button & {
            class?: string;
        };
    };
    nextButton: {
        type: PropType<Button & {
            class?: string;
        }>;
        default: () => Button & {
            class?: string;
        };
    };
    class: {
        type: PropType<any>;
        default: () => string;
    };
    ui: {
        type: PropType<Partial<typeof config & {
            strategy?: Strategy;
        }>>;
        default: any;
    };
}>>, {
    class: any;
    ui: any;
    items: any[];
    arrows: boolean;
    indicators: boolean;
    prevButton: Button & {
        class?: string;
    };
    nextButton: Button & {
        class?: string;
    };
}, {}>;
export default _default;
