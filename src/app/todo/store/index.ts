import { createReducer, on } from "@ngrx/store";
import { Todo } from "../model/todo";
import { todoComponantActionGroup } from "./actions";

export interface TodoState {
  todos: Todo[];
}

export const initialTodoState: TodoState = {
  todos: [],
}

export const todoReducer = createReducer(
  initialTodoState,
  // On ajoute les réducers de chaque todo Action
  on(todoComponantActionGroup.addTodo, (oldState, {todo}) => ({
    ...oldState,
    todos: [...oldState.todos, todo]
  }))
);
