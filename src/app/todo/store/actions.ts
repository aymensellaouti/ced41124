
// On définit les actions du Todo

import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "../model/todo";

// Je définit ce que  je veux faire
export const todoComponantActionGroup = createActionGroup({
  source: 'TodoComponent',
  events: {
    'load Todos': emptyProps(),
    'todos loaded': props<{todos: Todo[]}>(),
    'Add Todo': props<{ todo: Todo }>(),
    'Delete Todo': props<{ id: string }>(),
  },
});
