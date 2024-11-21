import { createFeatureSelector, createSelector } from "@ngrx/store";
import { todoSliceName, TodoState } from ".";

// Ici on définit les sélecteurs du slice todo
// Ndéfiniw les sélecteurs eli 7achetna bihom fel slice Todo

// Jibli el portion du state eli lahya bel todo
export const todoState = createFeatureSelector<TodoState>(todoSliceName);


// Sélectionne moi la liste des todos
export const  todosSelector = createSelector(
  todoState,
  (state: TodoState) => state.todos
);
