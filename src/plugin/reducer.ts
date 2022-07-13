/**
 * @file {@link https://github.com/CianciarusoCataldo/modular-plugin-ui modular-plugin-ui} reducer file
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineEffects } from "modular-engine-types";

import { setDarkMode } from "./actions";
import { UiPluginState } from "./types";

/**
 * {@link https://github.com/CianciarusoCataldo/modular-plugin-ui modular-plugin-ui} reducer
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-ui
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const uiReducer: ModularEngineEffects<UiPluginState> = {
  [setDarkMode.type]: (state, action) => ({
    ...state,
    darkMode: action.payload.newDarkMode,
  }),
};

export default uiReducer;
