import { createRequire } from 'node:module';
import { addTemplate, useNuxt, installModule, createResolver, defineNuxtModule, addPlugin, addComponentsDir, addImportsDir } from '@nuxt/kit';
import { join } from 'pathe';
import { defu } from 'defu';
import { kebabCase } from 'scule';
import defaultColors$1 from 'tailwindcss/colors.js';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const name = "nupsy";
const version = "2.18.4";

function createTemplates(nuxt = useNuxt()) {
  const template = addTemplate({
    filename: "ui.colors.mjs",
    getContents: () => `export default ${JSON.stringify(nuxt.options.appConfig.ui.colors)};`,
    write: true
  });
  const typesTemplate = addTemplate({
    filename: "ui.colors.d.ts",
    getContents: () => `declare module '#ui-colors' { const defaultExport: ${JSON.stringify(nuxt.options.appConfig.ui.colors)}; export default defaultExport; }`,
    write: true
  });
  nuxt.options.alias["#ui-colors"] = template.dst;
  nuxt.hook("prepare:types", (opts) => {
    opts.references.push({ path: typesTemplate.dst });
  });
}

function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}

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
const excludeColors = (colors) => {
  return Object.entries(omit(colors, colorsToExclude)).filter(([, value]) => typeof value === "object").map(([key]) => kebabCase(key));
};
const setGlobalColors = (theme) => {
  const globalColors = {
    ...theme.colors || defaultColors$1,
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
    globalColors.cool = theme.extend.colors.cool = defaultColors$1.gray;
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

async function installTailwind(moduleOptions, nuxt = useNuxt(), resolve = createResolver(import.meta.url).resolve) {
  const runtimeDir = resolve("./runtime");
  nuxt.hook("tailwindcss:config", function(tailwindConfig) {
    tailwindConfig.theme = tailwindConfig.theme || {};
    tailwindConfig.theme.extend = tailwindConfig.theme.extend || {};
    tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {};
    const colors = setGlobalColors(tailwindConfig.theme);
    nuxt.options.appConfig.ui = {
      primary: "green",
      gray: "cool",
      colors,
      strategy: "merge"
    };
  });
  const configTemplate = addTemplate({
    filename: "nuxtui-tailwind.config.cjs",
    write: true,
    getContents: ({ nuxt: nuxt2 }) => `
      const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')
      const { customSafelistExtractor, generateSafelist } = require(${JSON.stringify(resolve(runtimeDir, "utils", "colors"))})

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

      module.exports = {
        plugins: [
          require('@tailwindcss/forms')({ strategy: 'class' }),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss')
        ],
        content: {
          files: [
            ${JSON.stringify(resolve(runtimeDir, "components/**/*.{vue,mjs,ts}"))},
            ${JSON.stringify(resolve(runtimeDir, "ui.config/**/*.{mjs,js,ts}"))}
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\\r\\n|\\r|\\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor(${JSON.stringify(moduleOptions.prefix)}, content, ${JSON.stringify(nuxt2.options.appConfig.ui.colors)}, ${JSON.stringify(moduleOptions.safelistColors)})
              ]
            }
          }
        },
        safelist: generateSafelist(${JSON.stringify(moduleOptions.safelistColors || [])}, ${JSON.stringify(nuxt2.options.appConfig.ui.colors)}),
      }
    `
  });
  await installModule("@nuxtjs/tailwindcss", defu({
    exposeConfig: true,
    config: { darkMode: "class" },
    configPath: [
      configTemplate.dst,
      join(nuxt.options.rootDir, "tailwind.config")
    ]
    // @ts-expect-error - `@nuxtjs/tailwindcss` not installed yet
  }, nuxt.options.tailwindcss));
}

const _require = createRequire(import.meta.url);
const defaultColors = _require("tailwindcss/colors.js");
delete defaultColors.lightBlue;
delete defaultColors.warmGray;
delete defaultColors.trueGray;
delete defaultColors.coolGray;
delete defaultColors.blueGray;
const module = defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "ui",
    compatibility: {
      nuxt: ">=3.10.0"
    }
  },
  defaults: {
    prefix: "U",
    safelistColors: ["primary"],
    disableGlobalStyles: false
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve("./runtime");
    nuxt.options.build.transpile.push(runtimeDir);
    nuxt.options.build.transpile.push("@popperjs/core", "@headlessui/vue");
    nuxt.options.alias["#ui"] = runtimeDir;
    if (!options.disableGlobalStyles) {
      nuxt.options.css.push(resolve(runtimeDir, "ui.css"));
    }
    createTemplates(nuxt);
    await installModule("@nuxt/icon");
    await installModule("@nuxtjs/color-mode", { classSuffix: "" });
    await installTailwind(options, nuxt, resolve);
    addPlugin({
      src: resolve(runtimeDir, "plugins", "colors")
    });
    addPlugin({
      src: resolve(runtimeDir, "plugins", "modals")
    });
    addPlugin({
      src: resolve(runtimeDir, "plugins", "slideovers")
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "elements"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "forms"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "data"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "layout"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "navigation"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addComponentsDir({
      path: resolve(runtimeDir, "components", "overlays"),
      prefix: options.prefix,
      global: options.global,
      watch: false
    });
    addImportsDir(resolve(runtimeDir, "composables"));
  }
});

export { module as default };
