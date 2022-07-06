/**
 * @file `ui` plugin types definitions
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  ModularEngineCustomState,
  ModularEnginePlugin,
} from "modular-engine-types";

/**
 * `ui` plugin state slice
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UIState = ModularEngineCustomState<{
  darkMode: boolean;
}>;

/**
 * `ui` plugin settings
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UiPlugin = ModularEnginePlugin<{
  darkMode?: boolean;
  onDarkModeChange?: ((newDarkMode: boolean) => void)[];
}>;
