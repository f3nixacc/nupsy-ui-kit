import { omit } from "./lodash.js";
import { kebabCase, camelCase, upperFirst } from "scule";
import defaultColors from "tailwindcss/colors.js";
const colorsToExclude = [
  "inherit",
  "transparent",
  "current",
  "white",
  "black",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "cool"
];
const safelistByComponent = {
  alert: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-50$`)
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`)
  }],
  avatar: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`)
  }],
  badge: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-50$`)
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`)
  }],
  button: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-50$`),
    variants: ["hover", "disabled"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-100$`),
    variants: ["hover"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark", "dark:disabled"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`),
    variants: ["disabled", "dark:hover"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-600$`),
    variants: ["hover"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-900$`),
    variants: ["dark:hover"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-950$`),
    variants: ["dark", "dark:hover", "dark:disabled"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark", "dark:disabled"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`),
    variants: ["dark:hover", "disabled"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-600$`),
    variants: ["hover"]
  }, {
    pattern: RegExp(`^outline-(${colorsAsRegex2})-400$`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: RegExp(`^outline-(${colorsAsRegex2})-500$`),
    variants: ["focus-visible"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`),
    variants: ["focus-visible"]
  }],
  input: (colorsAsRegex2) => [{
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
    variants: ["dark", "dark:focus"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`),
    variants: ["focus"]
  }],
  radio: (colorsAsRegex2) => [{
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`),
    variants: ["focus-visible"]
  }],
  checkbox: (colorsAsRegex2) => [{
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`),
    variants: ["focus-visible"]
  }],
  toggle: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`),
    variants: ["focus-visible"]
  }],
  range: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-400$`),
    variants: ["dark:focus-visible"]
  }, {
    pattern: RegExp(`^ring-(${colorsAsRegex2})-500$`),
    variants: ["focus-visible"]
  }],
  progress: (colorsAsRegex2) => [{
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }],
  meter: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }],
  notification: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`)
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^text-(${colorsAsRegex2})-500$`)
  }],
  chip: (colorsAsRegex2) => [{
    pattern: RegExp(`^bg-(${colorsAsRegex2})-400$`),
    variants: ["dark"]
  }, {
    pattern: RegExp(`^bg-(${colorsAsRegex2})-500$`)
  }]
};
const safelistComponentAliasesMap = {
  "USelect": "UInput",
  "USelectMenu": "UInput",
  "UTextarea": "UInput",
  "URadioGroup": "URadio",
  "UMeterGroup": "UMeter"
};
const colorsAsRegex = (colors) => colors.join("|");
export const excludeColors = (colors) => {
  return Object.entries(omit(colors, colorsToExclude)).filter(([, value]) => typeof value === "object").map(([key]) => kebabCase(key));
};
export const setGlobalColors = (theme) => {
  const globalColors = {
    ...theme.colors || defaultColors,
    ...theme.extend?.colors
  };
  globalColors.primary = theme.extend.colors.primary = {
    50: "rgb(var(--color-primary-50) / <alpha-value>)",
    100: "rgb(var(--color-primary-100) / <alpha-value>)",
    200: "rgb(var(--color-primary-200) / <alpha-value>)",
    300: "rgb(var(--color-primary-300) / <alpha-value>)",
    400: "rgb(var(--color-primary-400) / <alpha-value>)",
    500: "rgb(var(--color-primary-500) / <alpha-value>)",
    600: "rgb(var(--color-primary-600) / <alpha-value>)",
    700: "rgb(var(--color-primary-700) / <alpha-value>)",
    800: "rgb(var(--color-primary-800) / <alpha-value>)",
    900: "rgb(var(--color-primary-900) / <alpha-value>)",
    950: "rgb(var(--color-primary-950) / <alpha-value>)",
    DEFAULT: "rgb(var(--color-primary-DEFAULT) / <alpha-value>)"
  };
  if (globalColors.gray) {
    globalColors.cool = theme.extend.colors.cool = defaultColors.gray;
  }
  globalColors.gray = theme.extend.colors.gray = {
    50: "rgb(var(--color-gray-50) / <alpha-value>)",
    100: "rgb(var(--color-gray-100) / <alpha-value>)",
    200: "rgb(var(--color-gray-200) / <alpha-value>)",
    300: "rgb(var(--color-gray-300) / <alpha-value>)",
    400: "rgb(var(--color-gray-400) / <alpha-value>)",
    500: "rgb(var(--color-gray-500) / <alpha-value>)",
    600: "rgb(var(--color-gray-600) / <alpha-value>)",
    700: "rgb(var(--color-gray-700) / <alpha-value>)",
    800: "rgb(var(--color-gray-800) / <alpha-value>)",
    900: "rgb(var(--color-gray-900) / <alpha-value>)",
    950: "rgb(var(--color-gray-950) / <alpha-value>)"
  };
  return excludeColors(globalColors);
};
export const generateSafelist = (colors, globalColors) => {
  const baseSafelist = Object.keys(safelistByComponent).flatMap((component) => safelistByComponent[component](colorsAsRegex(colors)));
  const formsSafelist = ["input", "radio", "checkbox", "toggle", "range"].flatMap((component) => safelistByComponent[component](colorsAsRegex(["red"])));
  return [
    ...baseSafelist,
    ...formsSafelist,
    // Ensure all global colors are safelisted for the Notification (toast.add)
    ...safelistByComponent["notification"](colorsAsRegex(globalColors)),
    // Gray safelist for Avatar & Notification
    "bg-gray-500",
    "dark:bg-gray-400",
    "text-gray-500",
    "dark:text-gray-400"
  ];
};
export const customSafelistExtractor = (prefix, content, colors, safelistColors) => {
  const classes = [];
  const regex = /<([A-Za-z][A-Za-z0-9]*(?:-[A-Za-z][A-Za-z0-9]*)*)\s+(?![^>]*:color\b)[^>]*\bcolor=["']([^"']+)["'][^>]*>/gs;
  const matches = content.matchAll(regex);
  const components = Object.keys(safelistByComponent).map((component) => `${prefix}${component.charAt(0).toUpperCase() + component.slice(1)}`);
  for (const match of matches) {
    const [, component, color] = match;
    const camelComponent = upperFirst(camelCase(component));
    if (!colors.includes(color) || safelistColors.includes(color)) {
      continue;
    }
    let name = safelistComponentAliasesMap[camelComponent] ? safelistComponentAliasesMap[camelComponent] : camelComponent;
    if (!components.includes(name)) {
      continue;
    }
    name = name.replace(prefix, "").toLowerCase();
    const matchClasses = safelistByComponent[name](color).flatMap((group) => {
      return typeof group === "string" ? "" : ["", ...group.variants || []].flatMap((variant) => {
        const matches2 = group.pattern.source.match(/\(([^)]+)\)/g);
        return matches2.map((match2) => {
          const colorOptions = match2.substring(1, match2.length - 1).split("|");
          return colorOptions.map(
            (color2) => {
              const classesExtracted = group.pattern.source.replace(match2, color2).replace("^", "").replace("$", "");
              if (variant) {
                return `${variant}:${classesExtracted}`;
              }
              return classesExtracted;
            }
          );
        }).flat();
      });
    });
    classes.push(...matchClasses);
  }
  return classes;
};
