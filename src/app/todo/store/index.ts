import { createReducer, on } from "@ngrx/store";
import { Todo } from "../model/todo";
import { todoComponantActionGroup } from "./actions";
import { v4 as uuidv4 } from 'uuid';
export const todoSliceName = 'todo';
export interface TodoState {
  todos: Todo[];
}

export const initialTodoState: TodoState = {
  todos: [],
}

export const todoReducer = createReducer(
  initialTodoState,
  // On ajoute les réducers de chaque todo Action
  on(todoComponantActionGroup.addTodo, (oldState, { todo }) => {
    todo.id = uuidv4();
    return {
      ...oldState,
      todos: [...oldState.todos, todo],
    };
  }),
  on(todoComponantActionGroup.deleteTodo, (oldState, { id }) => ({
    ...oldState,
    todos: oldState.todos.filter((todo) => todo.id != id),
  }))
);
