import type { PropType } from 'vue';
import type { Command, Group } from '../../types/index.js';
import { commandPalette } from '#ui/ui.config';
declare const _default: import("vue").DefineComponent<{
    group: {
        type: PropType<Group>;
        required: true;
    };
    query: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
        type: StringConstructor;
        required: true;
    };
    commandAttribute: {
        type: StringConstructor;
        required: true;
    };
    selectedIcon: {
        type: StringConstructor;
        required: true;
    };
    ui: {
        type: PropType<typeof commandPalette>;
        required: true;
    };
}, {
    label: import("vue").ComputedRef<any>;
    highlight: (text: string, { indices, value }: Command["matches"][number]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    group: {
        type: PropType<Group>;
        required: true;
    };
    query: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
        type: StringConstructor;
        required: true;
    };
    commandAttribute: {
        type: StringConstructor;
        required: true;
    };
    selectedIcon: {
        type: StringConstructor;
        required: true;
    };
    ui: {
        type: PropType<typeof commandPalette>;
        required: true;
    };
}>>, {
    query: string;
}, {}>;
export default _default;
