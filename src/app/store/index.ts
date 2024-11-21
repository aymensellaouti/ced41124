import { createReducer, on } from "@ngrx/store";
import { appComponantActionGroup } from "./action";
import { initialTodoState, todoSliceName, TodoState } from "../todo/store";

export interface AppState {
    [uxSliceName]: UxState,
    [todoSliceName]: TodoState
}

export const uxSliceName = "ux";

export interface UxState {
    appName: string;
}
export const initialUxState: UxState = {
    appName: ''
}
export const appReducer = createReducer(
  initialUxState,
  // Bech ndéfini pour chaque action qui m'interesse
  // Quel traitement je fais
  on(appComponantActionGroup.loadAPP, (state) => ({
    ...state,
    appName: 'CED',
  }))
);
