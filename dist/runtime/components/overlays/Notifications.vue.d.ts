import type { PropType } from 'vue';
import type { Notification, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
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
    toast: {
        add: (notification: Partial<Notification>) => {
            id: string;
            title?: string;
            description?: string;
            icon?: string;
            avatar?: import("../../types/avatar").Avatar;
            closeButton?: import("../../types/button").Button;
            timeout?: number;
            actions?: import("../../types/notification").NotificationAction[];
            click?: (...args: any[]) => void;
            callback?: (...args: any[]) => void;
            color?: import("../../types/notification").NotificationColor;
            ui?: any;
        };
        remove: (id: string) => void;
        update: (id: string, notification: Partial<Notification>) => void;
        clear: () => void;
    };
    notifications: import("vue").Ref<Notification[]>;
    wrapperClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}>;
export default _default;
