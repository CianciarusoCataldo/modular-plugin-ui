/**
 * @file {@link https://github.com/CianciarusoCataldo/modular-plugin-ui modular-plugin-ui} init file
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { UiPlugin } from "./types";
import initialState from "./initial-state";
import uiReducer from "./reducer";
import * as actions from "./actions";

/**
 * {@link https://github.com/CianciarusoCataldo/modular-plugin-ui modular-plugin-ui} create function. To use this plugin, include it into your
 * modular-engine config.
 *
 * @returns `ui` plugin
 *
 * @example <caption> Use modular-plugin-ui with modular-engine config</caption>
 *
 * //into modular-engine config file
 *
 * const uiPlugin = require("modular-plugin-ui");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [uiPlugin],
 *   ui: {
 *     darkMode: true,
 *     onDarkModeChange: [(darkMode) => console.log("new dark mode " + darkMode)],
 *   },
 * };
 *
 * module.exports = { config };
 * ``
 *
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui
 * @see https://cianciarusocataldo.github.io/modular-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const uiPlugin: UiPlugin = () => ({
  feature: "ui",
  create: (config) => {
    const uiConfig = config.ui || {};
    return {
      field: "ui",
      content: {
        darkMode: uiConfig.darkMode || false,
        onDarkModeChange: uiConfig.onDarkModeChange || [],
      },
    };
  },
  redux: (config) => ({
    initialState: { ...initialState, darkMode: config.ui.darkMode },
    slice: "ui",
    effects: uiReducer,
  }),
  format: (config, enabledPlugins) => {
    let input = { ...config };
    if (enabledPlugins.urlChecker) {
      input.urlChecker.queryParameters["dark"] = ({
        config: paramConfig,
        urlParam,
      }) => {
        let queryValue: boolean | null = null;
        switch (urlParam.toLowerCase()) {
          case "true": {
            queryValue = true;
          }

          case "false":
            queryValue = false;

          default:
            queryValue = null;
        }

        let configInput = { ...paramConfig };

        configInput.ui.darkMode = queryValue !== null ? queryValue : false;

        return configInput;
      };

      input.urlChecker.before.push("dark");
    }

    return input;
  },
  before: ({ config }) => {
    let input = { ...config };

    const onDarkModeChangeCallbacks = input.ui.onDarkModeChange;

    input.redux.middlewares.push((action, store) => {
      if (action.type === actions.setDarkMode.type) {
        onDarkModeChangeCallbacks.forEach((callback) => {
          callback(action.payload.newDarkMode);
        });
      }
    });

    return input;
  },
});

export default uiPlugin;
