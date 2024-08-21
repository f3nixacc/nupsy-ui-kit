import type { PropType, AriaAttributes } from "vue";
import type { Strategy, Button, ProgressColor, ProgressAnimation } from "../../types/index.js";
declare const config: any;
declare function defaultComparator<T>(a: T, z: T): boolean;
interface Column {
    key: string;
    sortable?: boolean;
    sort?: (a: any, b: any, direction: "asc" | "desc") => number;
    direction?: "asc" | "desc";
    class?: string;
    rowClass?: string;
    [key: string]: any;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default: any;
    };
    by: {
        type: (StringConstructor | FunctionConstructor)[];
        default: () => typeof defaultComparator;
    };
    rows: {
        type: PropType<{
            [key: string]: any;
        }[]>;
        default: () => any[];
    };
    columns: {
        type: PropType<Column[]>;
        default: any;
    };
    columnAttribute: {
        type: StringConstructor;
        default: string;
    };
    sort: {
        type: PropType<{
            column: string;
            direction: "asc" | "desc";
        }>;
        default: () => {};
    };
    sortMode: {
        type: PropType<"manual" | "auto">;
        default: string;
    };
    sortButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    sortAscIcon: {
        type: StringConstructor;
        default: () => any;
    };
    sortDescIcon: {
        type: StringConstructor;
        default: () => any;
    };
    expandButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => any;
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => any;
    };
    caption: {
        type: StringConstructor;
        default: any;
    };
    progress: {
        type: PropType<{
            color: ProgressColor;
            animation: ProgressAnimation;
        }>;
        default: () => any;
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
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    sort: import("vue").Ref<{
        column: string;
        direction: "asc" | "desc";
    }>;
    columns: import("vue").ComputedRef<Column[]>;
    rows: import("vue").ComputedRef<{
        [key: string]: any;
    }[]>;
    selected: import("vue").WritableComputedRef<unknown[]>;
    indeterminate: import("vue").ComputedRef<boolean>;
    emptyState: import("vue").ComputedRef<any>;
    loadingState: import("vue").ComputedRef<any>;
    openedRows: import("vue").Ref<any[]>;
    isSelected: (row: any) => boolean;
    onSort: (column: {
        key: string;
        direction?: "asc" | "desc";
    }) => void;
    onSelect: (row: any) => void;
    onChange: (checked: boolean) => void;
    getRowData: (row: Object, rowKey: string | string[], defaultValue?: any) => any;
    toggleOpened: (index: number) => void;
    getAriaSort: (column: Column) => AriaAttributes["aria-sort"];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:sort")[], "update:modelValue" | "update:sort", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: any;
    };
    by: {
        type: (StringConstructor | FunctionConstructor)[];
        default: () => typeof defaultComparator;
    };
    rows: {
        type: PropType<{
            [key: string]: any;
        }[]>;
        default: () => any[];
    };
    columns: {
        type: PropType<Column[]>;
        default: any;
    };
    columnAttribute: {
        type: StringConstructor;
        default: string;
    };
    sort: {
        type: PropType<{
            column: string;
            direction: "asc" | "desc";
        }>;
        default: () => {};
    };
    sortMode: {
        type: PropType<"manual" | "auto">;
        default: string;
    };
    sortButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    sortAscIcon: {
        type: StringConstructor;
        default: () => any;
    };
    sortDescIcon: {
        type: StringConstructor;
        default: () => any;
    };
    expandButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => any;
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => any;
    };
    caption: {
        type: StringConstructor;
        default: any;
    };
    progress: {
        type: PropType<{
            color: ProgressColor;
            animation: ProgressAnimation;
        }>;
        default: () => any;
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
    "onUpdate:sort"?: (...args: any[]) => any;
}, {
    sort: {
        column: string;
        direction: "asc" | "desc";
    };
    class: any;
    caption: string;
    columns: Column[];
    progress: {
        color: ProgressColor;
        animation: ProgressAnimation;
    };
    ui: any;
    loading: boolean;
    modelValue: unknown[];
    by: string | Function;
    rows: {
        [key: string]: any;
    }[];
    columnAttribute: string;
    sortMode: "auto" | "manual";
    sortButton: Button;
    sortAscIcon: string;
    sortDescIcon: string;
    expandButton: Button;
    loadingState: {
        icon: string;
        label: string;
    };
    emptyState: {
        icon: string;
        label: string;
    };
}, {}>;
export default _default;
