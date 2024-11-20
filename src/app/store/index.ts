import { createReducer, on } from "@ngrx/store";
import { appComponantActionGroup } from "./action";
import { initialTodoState, TodoState } from "../todo/store";

export interface AppState {
  ux: {
    appName: ''
  }
}

export const initialAppState: AppState = {
  ux: {
    appName: ''
  }
}
export const appReducer = createReducer(
  initialAppState,
  on(
    appComponantActionGroup.loadAPP,
    (oldState) => ({
      ...oldState,
      appName: 'CED'
    })
  )
)
