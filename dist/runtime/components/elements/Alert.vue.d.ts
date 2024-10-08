import type { PropType } from 'vue';
import type { Avatar, Button, AlertColor, AlertVariant, AlertAction, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    avatar: {
        type: PropType<Avatar>;
        default: any;
    };
    closeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    actions: {
        type: PropType<AlertAction[]>;
        default: () => any[];
    };
    color: {
        type: PropType<AlertColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<AlertVariant>;
        default: () => any;
        validator(value: string): boolean;
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
    ui: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    alertClass: import("vue").ComputedRef<string>;
    onAction: (action: AlertAction) => void;
    twMerge: (...classLists: import("tailwind-merge").ClassNameValue[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    avatar: {
        type: PropType<Avatar>;
        default: any;
    };
    closeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    actions: {
        type: PropType<AlertAction[]>;
        default: () => any[];
    };
    color: {
        type: PropType<AlertColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<AlertVariant>;
        default: () => any;
        validator(value: string): boolean;
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
}>> & {
    onClose?: (...args: any[]) => any;
}, {
    class: any;
    avatar: any;
    color: any;
    variant: AlertVariant;
    title: string;
    ui: any;
    icon: string;
    description: string;
    closeButton: Button;
    actions: AlertAction[];
}, {}>;
export default _default;
