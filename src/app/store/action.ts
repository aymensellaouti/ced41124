import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { ConnectedUser } from "../auth/service/auth.service";

// export const loadApp = createAction('[AppComponent] Load APP')
// export const loadApp2 = createAction('[AppComponent] Load APP2')
// export const loadApp3 = createAction('[AppComponent] Load APP3')
// export const loadApp4 = createAction('[AppComponent] Load APP4')

export const appComponantActionGroup = createActionGroup({
  source: 'AppComponent',
  events: {
    "Load APP": emptyProps(),
    "Add User": props<{user: ConnectedUser}>()
  }
});
