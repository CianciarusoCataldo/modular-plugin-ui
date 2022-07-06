/**
 * @file `ui` plugin actions, to use advanced app ui features (like dark-mode)
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createModularAction } from "modular-utils";

/**
 * Switch UI dark mode to on/off
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setDarkMode = createModularAction(
  "@@ui/SWITCH_DARK_MODE",
  (newDarkMode: boolean) => ({
    newDarkMode,
  })
);
