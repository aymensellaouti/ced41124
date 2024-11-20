import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from ".";


// Jibli el portion du state eli lahya bel todo
export const todoState = createFeatureSelector<TodoState>('todo');


export const  todosSelector = createSelector(
  todoState,
  (state: TodoState) => state.todos
);
