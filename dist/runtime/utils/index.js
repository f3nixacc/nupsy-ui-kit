import { defu, createDefu } from "defu";
import { extendTailwindMerge } from "tailwind-merge";
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      icons: [(classPart) => /^i-/.test(classPart)]
    }
  }
});
const defuTwMerge = createDefu((obj, key, value, namespace) => {
  if (namespace === "default" || namespace.startsWith("default.")) {
    return false;
  }
  if (namespace === "popper" || namespace.startsWith("popper.")) {
    return false;
  }
  if (namespace.endsWith("avatar") && key === "size") {
    return false;
  }
  if (namespace.endsWith("chip") && key === "size") {
    return false;
  }
  if (namespace.endsWith("badge") && key === "size" || key === "color" || key === "variant") {
    return false;
  }
  if (typeof obj[key] === "string" && typeof value === "string" && obj[key] && value) {
    obj[key] = customTwMerge(obj[key], value);
    return true;
  }
});
export function mergeConfig(strategy, ...configs) {
  if (strategy === "override") {
    return defu({}, ...configs);
  }
  return defuTwMerge({}, ...configs);
}
export function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(_, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : null;
}
export function getSlotsChildren(slots) {
  let children = slots.default?.();
  if (children?.length) {
    children = children.flatMap((c) => {
      if (typeof c.type === "symbol") {
        if (typeof c.children === "string") {
          return;
        }
        return c.children;
      } else if (c.type.name === "ContentSlot") {
        return c.ctx.slots.default?.();
      }
      return c;
    }).filter(Boolean);
  }
  return children || [];
}
export function looseToNumber(val) {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}
export * from "./lodash.js";
export * from "./link.js";
