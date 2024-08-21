import type { PropType } from 'vue';
import type { ButtonSize, Strategy } from '../../types/index.js';
declare const buttonGroupConfig: any;
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<ButtonSize>;
        default: any;
        validator(value: string): boolean;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator(value: string): boolean;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof buttonGroupConfig> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<ButtonSize>;
        default: any;
        validator(value: string): boolean;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator(value: string): boolean;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof buttonGroupConfig> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>>, {
    orientation: "horizontal" | "vertical";
    size: ButtonSize;
    ui: any;
    class: any;
}, {}>;
export default _default;
