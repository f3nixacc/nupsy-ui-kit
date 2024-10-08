import type { ComputedRef, PropType, ComponentPublicInstance } from 'vue';
import type { UseFuseOptions } from '@vueuse/integrations/useFuse';
import type { Group, Command, Button, Strategy } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ObjectConstructor | ArrayConstructor)[];
        default: any;
    };
    by: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    nullable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    groups: {
        type: PropType<Group[]>;
        default: () => any[];
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    selectedIcon: {
        type: StringConstructor;
        default: () => any;
    };
    closeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
            queryLabel: string;
        }>;
        default: () => any;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
        type: StringConstructor;
        default: string;
    };
    commandAttribute: {
        type: StringConstructor;
        default: string;
    };
    autoselect: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoclear: {
        type: BooleanConstructor;
        default: boolean;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    fuse: {
        type: PropType<UseFuseOptions<Command>>;
        default: () => {};
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
    ui: ComputedRef<any>;
    attrs: ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    groups: ComputedRef<(Group | {
        commands: Command[];
        key: string;
        active?: string;
        inactive?: string;
        search?: (...args: any[]) => any[] | Promise<any[]>;
        filter?: (...args: any[]) => Command[];
        static?: Boolean;
    })[]>;
    comboboxInput: import("vue").Ref<ComponentPublicInstance<HTMLInputElement>>;
    query: import("vue").Ref<string>;
    iconName: ComputedRef<string>;
    iconClass: ComputedRef<string>;
    emptyState: ComputedRef<any>;
    onSelect: (option: Command | Command[]) => void;
    onClear: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "close")[], "update:modelValue" | "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ObjectConstructor | ArrayConstructor)[];
        default: any;
    };
    by: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    nullable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    groups: {
        type: PropType<Group[]>;
        default: () => any[];
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    selectedIcon: {
        type: StringConstructor;
        default: () => any;
    };
    closeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
            queryLabel: string;
        }>;
        default: () => any;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
        type: StringConstructor;
        default: string;
    };
    commandAttribute: {
        type: StringConstructor;
        default: string;
    };
    autoselect: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoclear: {
        type: BooleanConstructor;
        default: boolean;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    fuse: {
        type: PropType<UseFuseOptions<Command>>;
        default: () => {};
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
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
}, {
    class: any;
    ui: any;
    loading: boolean;
    icon: string;
    loadingIcon: string;
    modelValue: string | number | Record<string, any> | unknown[];
    by: string;
    emptyState: {
        icon: string;
        label: string;
        queryLabel: string;
    };
    multiple: boolean;
    placeholder: string;
    closeButton: Button;
    nullable: boolean;
    selectedIcon: string;
    debounce: number;
    searchable: boolean;
    groupAttribute: string;
    commandAttribute: string;
    groups: Group[];
    autoselect: boolean;
    autoclear: boolean;
    fuse: {};
}, {}>;
export default _default;
