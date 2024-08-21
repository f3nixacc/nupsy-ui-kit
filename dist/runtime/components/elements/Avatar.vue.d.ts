import type { PropType } from 'vue';
import type { AvatarSize, AvatarChipColor, AvatarChipPosition, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    as: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    src: {
        type: (StringConstructor | BooleanConstructor)[];
        default: any;
    };
    alt: {
        type: StringConstructor;
        default: any;
    };
    text: {
        type: StringConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    size: {
        type: PropType<AvatarSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    chipColor: {
        type: PropType<AvatarChipColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    chipPosition: {
        type: PropType<AvatarChipPosition>;
        default: () => any;
        validator(value: string): boolean;
    };
    chipText: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    imgClass: {
        type: StringConstructor;
        default: string;
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
    imgClass: import("vue").ComputedRef<string>;
    iconClass: import("vue").ComputedRef<string>;
    chipClass: import("vue").ComputedRef<string>;
    url: import("vue").ComputedRef<string>;
    placeholder: import("vue").ComputedRef<string>;
    error: import("vue").Ref<boolean>;
    onError: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    as: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    src: {
        type: (StringConstructor | BooleanConstructor)[];
        default: any;
    };
    alt: {
        type: StringConstructor;
        default: any;
    };
    text: {
        type: StringConstructor;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    size: {
        type: PropType<AvatarSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    chipColor: {
        type: PropType<AvatarChipColor>;
        default: () => any;
        validator(value: string): boolean;
    };
    chipPosition: {
        type: PropType<AvatarChipPosition>;
        default: () => any;
        validator(value: string): boolean;
    };
    chipText: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    imgClass: {
        type: StringConstructor;
        default: string;
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
    size: AvatarSize;
    class: any;
    as: string | Record<string, any>;
    text: string;
    ui: any;
    icon: string;
    src: string | boolean;
    alt: string;
    chipColor: any;
    chipPosition: "top-right" | "bottom-right" | "top-left" | "bottom-left";
    chipText: string | number;
    imgClass: string;
}, {}>;
export default _default;
