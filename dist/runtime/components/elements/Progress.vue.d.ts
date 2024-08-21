import type { PropType } from 'vue';
import type { Strategy, ProgressSize, ProgressAnimation, ProgressColor } from '../../types/index.js';
declare const config: any;
declare const _default: import("vue").DefineComponent<{
    value: {
        type: NumberConstructor;
        default: any;
    };
    max: {
        type: (NumberConstructor | {
            (arrayLength: number): any[];
            (...items: any[]): any[];
            new (arrayLength: number): any[];
            new (...items: any[]): any[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: number;
    };
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: PropType<ProgressAnimation>;
        default: () => any;
        validator(value: string): boolean;
    };
    size: {
        type: PropType<ProgressSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<ProgressColor>;
        default: () => any;
        validator(value: string): any;
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
    indicatorContainerClass: import("vue").ComputedRef<string>;
    indicatorClass: import("vue").ComputedRef<string>;
    progressClass: import("vue").ComputedRef<string>;
    stepsClass: import("vue").ComputedRef<string>;
    stepClasses: (index: string | number) => string;
    isIndeterminate: import("vue").ComputedRef<boolean>;
    isSteps: import("vue").ComputedRef<boolean>;
    realMax: import("vue").ComputedRef<number>;
    percent: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: NumberConstructor;
        default: any;
    };
    max: {
        type: (NumberConstructor | {
            (arrayLength: number): any[];
            (...items: any[]): any[];
            new (arrayLength: number): any[];
            new (...items: any[]): any[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: number;
    };
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: PropType<ProgressAnimation>;
        default: () => any;
        validator(value: string): boolean;
    };
    size: {
        type: PropType<ProgressSize>;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<ProgressColor>;
        default: () => any;
        validator(value: string): any;
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
    size: "xs" | "sm" | "2xs" | "md" | "lg" | "xl" | "2xl";
    class: any;
    color: any;
    ui: any;
    value: number;
    max: number | any[];
    indicator: boolean;
    animation: "carousel" | "carousel-inverse" | "swing" | "elastic";
}, {}>;
export default _default;
