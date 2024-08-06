import pluginVue from "eslint-plugin-vue";
import eox from "@eox/eslint-config";

export default [
  ...eox,
  ...pluginVue.configs["flat/essential"],
  {
    ignores: ["public/", ".eodash/"],
  },
];
