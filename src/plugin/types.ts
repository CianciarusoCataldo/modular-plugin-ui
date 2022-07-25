/**
 * @file {@link https://github.com/CianciarusoCataldo/modular-plugin-ui modular-plugin-ui} types definitions
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
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
 *{@link https://github.com/CianciarusoCataldo/modular-plugin-ui modular-plugin-ui} state
 *
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UiPluginState = ModularEngineCustomState<{
  /** dark mode status */
  darkMode: boolean;

  isDrawerOpen?: boolean;
}>;

/**
 * {@link https://cianciarusocataldo.github.io/modular-plugin-ui modular-plugin-ui} settings
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UiPluginSettings = ModularEngineCustomState<{
  /** Initial dark mode status */
  darkMode?: boolean;

  /** Callbacks called everytime the dark mode status is changed */
  onDarkModeChange?: ((newDarkMode: boolean) => void)[];

  drawer?: boolean;
}>;

/**
 * {@link https://cianciarusocataldo.github.io/modular-plugin-ui modular-plugin-ui} interface
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UiPlugin = ModularEnginePlugin<UiPluginSettings>;
