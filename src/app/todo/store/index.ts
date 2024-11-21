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
  on(todoComponantActionGroup.addTodo, (state, { todo }) => {
    //todo.id = uuidv4();
    const newTodo = { ...todo, id: uuidv4() };
    console.log({ todoState: state });
    return {
      ...state,
      todos: [...state.todos, newTodo],
    };
  }),
  on(todoComponantActionGroup.deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id != id),
  })),
  on(todoComponantActionGroup.todosLoaded, (state, { todos }) => {
    return {
      ...state,
      todos: [...todos],
    };
  })
);
