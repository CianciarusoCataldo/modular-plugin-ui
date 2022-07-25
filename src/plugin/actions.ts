/**
 * @file {@link https://cianciarusocataldo.github.io//modular-plugin-ui/#/?id=actions modular-plugin-ui actions} file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createModularEngineAction } from "modular-engine-tools";

/**
 * Switch dark mode to on/off
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui/#/?id=actions
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setDarkMode = createModularEngineAction(
  "@@ui/SWITCH_DARK_MODE",
  (newDarkMode: boolean) => ({
    newDarkMode,
  })
);

/**
 * Open drawer
 *
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui/#/?id=actions
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 * @copyright Cataldo Cianciaruso 2022
 */
export const openDrawer = createModularEngineAction("@@ui/OPEN_DRAWER");

/**
 * Close drawer
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui/#/?id=actions
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 * @copyright Cataldo Cianciaruso 2022
 */
export const closeDrawer = createModularEngineAction("@@ui/CLOSE_DRAWER");
