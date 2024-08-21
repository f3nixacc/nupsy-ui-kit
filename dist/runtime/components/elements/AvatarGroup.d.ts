import type { PropType } from 'vue';
import type { AvatarSize, Strategy } from '../../types/index.js';
declare const avatarGroupConfig: any;
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<AvatarSize>;
        default: any;
        validator(value: string): boolean;
    };
    max: {
        type: NumberConstructor;
        default: any;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof avatarGroupConfig> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<AvatarSize>;
        default: any;
        validator(value: string): boolean;
    };
    max: {
        type: NumberConstructor;
        default: any;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof avatarGroupConfig> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>>, {
    size: AvatarSize;
    ui: any;
    class: any;
    max: number;
}, {}>;
export default _default;
