/**
 * @file `ui` plugin slice selectors
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineGlobalState } from "modular-engine-types";
import { createModularSelector } from "modular-utils";

import { UIState } from "./types";

/**
 * Return the `ui` plugin slice (if not enabled, a default slice state is returned)
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getUIView = createModularSelector(
  (state: Partial<ModularEngineGlobalState>): UIState =>
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
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const isInDarkMode = createModularSelector(
  getUIView,
  ({ darkMode }) => darkMode
);
