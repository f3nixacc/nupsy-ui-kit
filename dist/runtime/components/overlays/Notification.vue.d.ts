import type { PropType } from 'vue';
import type { Avatar, Button, NotificationColor, NotificationAction, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    id: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
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
    timeout: {
        type: NumberConstructor;
        default: () => any;
    };
    actions: {
        type: PropType<NotificationAction[]>;
        default: () => any[];
    };
    callback: {
        type: FunctionConstructor;
        default: any;
    };
    color: {
        type: PropType<NotificationColor>;
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
    wrapperClass: import("vue").ComputedRef<string>;
    progressClass: import("vue").ComputedRef<string>;
    progressStyle: import("vue").ComputedRef<{
        width: string;
    }>;
    iconClass: import("vue").ComputedRef<string>;
    onMouseover: () => void;
    onMouseleave: () => void;
    onClose: () => void;
    onAction: (action: NotificationAction) => void;
    twMerge: (...classLists: import("tailwind-merge").ClassNameValue[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
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
    timeout: {
        type: NumberConstructor;
        default: () => any;
    };
    actions: {
        type: PropType<NotificationAction[]>;
        default: () => any[];
    };
    callback: {
        type: FunctionConstructor;
        default: any;
    };
    color: {
        type: PropType<NotificationColor>;
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
    title: string;
    ui: any;
    icon: string;
    description: string;
    closeButton: Button;
    actions: NotificationAction[];
    timeout: number;
    callback: Function;
}, {}>;
export default _default;
