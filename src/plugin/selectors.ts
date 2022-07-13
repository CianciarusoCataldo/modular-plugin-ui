/**
 * @file {@link https://cianciarusocataldo.github.io/modular-plugin-ui/#/?id=selectors modular-plugin-ui selectors} file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineGlobalState } from "modular-engine-types";
import { createModularSelector } from "modular-engine-tools";

import { UiPluginState } from "./types";

/**
 * Return the {@link https://github.com/CianciarusoCataldo/modular-plugin-ui modular-plugin-ui} state (if not enabled, a default state is returned)
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui/#/?id=selectors
 * @see https://github.com/CianciarusoCataldo/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getUIView = createModularSelector(
  (state: Partial<ModularEngineGlobalState>): UiPluginState =>
    state.ui || {
      isHomePage: true,
      darkMode: false,
      homeRoute: "",
    },
  (uiState) => uiState
);

/**
 * Returns true if dark mode is enabled, false otherwise
 *
 * @see https://cianciarusocataldo.github.io//modular-engine/docs
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui/#/?id=selectors
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const isInDarkMode = createModularSelector(
  getUIView,
  ({ darkMode }) => darkMode
);
