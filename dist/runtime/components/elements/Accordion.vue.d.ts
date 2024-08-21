import type { PropType } from 'vue';
import type { AccordionItem, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<AccordionItem[]>;
        default: () => any[];
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    openIcon: {
        type: StringConstructor;
        default: () => any;
    };
    unmount: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIcon: {
        type: StringConstructor;
        default: () => any;
    };
    multiple: {
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
    uiButton: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    buttonRefs: import("vue").Ref<{
        open: boolean;
        close: (e: EventTarget) => {};
    }[]>;
    closeOthers: (currentIndex: number, e: Event) => void;
    omit: any;
    onEnter: (_el: Element, done: () => void) => void;
    onBeforeLeave: (_el: Element) => void;
    onAfterEnter: (_el: Element) => void;
    onLeave: (_el: Element, done: () => void) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "open"[], "open", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<AccordionItem[]>;
        default: () => any[];
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    openIcon: {
        type: StringConstructor;
        default: () => any;
    };
    unmount: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIcon: {
        type: StringConstructor;
        default: () => any;
    };
    multiple: {
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
    onOpen?: (...args: any[]) => any;
}, {
    class: any;
    ui: any;
    defaultOpen: boolean;
    unmount: boolean;
    items: AccordionItem[];
    openIcon: string;
    closeIcon: string;
    multiple: boolean;
}, {}>;
export default _default;
