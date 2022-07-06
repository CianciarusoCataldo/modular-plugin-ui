/**
 * @file `ui` plugin reducer file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

/** types */
import { ModularEngineEffects } from "modular-engine-types";

/** internal */
import { setDarkMode } from "./actions";
import { UIState } from "./types";

/**
 * `ui-manager` plugin reducer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const uiReducer: ModularEngineEffects<UIState> = {
  [setDarkMode.type]: (state, action) => ({
    ...state,
    darkMode: action.payload.newDarkMode,
  }),
};

export default uiReducer;
