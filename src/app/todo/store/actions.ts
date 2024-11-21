
// On définit les actions du Todo

import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../model/todo";

export const todoComponantActionGroup = createActionGroup({
  source: 'TodoComponent',
  events: {
    'Add Todo': props<{ todo: Todo }>(),
    'Delete Todo': props<{ id: string }>(),
  },
});
