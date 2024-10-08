import type { Notification } from '../types/notification.js';
export declare function useCopyToClipboard(options?: Partial<Notification>): {
    copy: (text: string, success?: {
        title?: string;
        description?: string;
    }, failure?: {
        title?: string;
        description?: string;
    }) => void;
};
