import type { Config as TWConfig } from 'tailwindcss';
import defaultColors from 'tailwindcss/colors.js';
type ColorConfig = Exclude<TWConfig['theme']['colors'], Function>;
export declare const excludeColors: (colors: ColorConfig | typeof defaultColors) => string[];
export declare const setGlobalColors: (theme: TWConfig["theme"]) => string[];
export declare const generateSafelist: (colors: string[], globalColors: string[]) => import("tailwindcss/types/config").SafelistConfig[];
type SafelistFn = Exclude<NonNullable<Extract<TWConfig['content'], {
    extract?: unknown;
}>['extract']>, Record<string, unknown>>;
export declare const customSafelistExtractor: (prefix: string, content: string, colors: string[], safelistColors: string[]) => ReturnType<SafelistFn>;
export {};
