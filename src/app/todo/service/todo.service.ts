import { inject, Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerInjectionToken } from "../../injection Tokens/logger.injection-token";
import { UUIDInjectionToken } from "../../injection Tokens/uuid.injection-token";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos: Todo[] = [];
  loggerService = inject(LoggerInjectionToken);
  uuid = inject(UUIDInjectionToken);
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.#todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    todo.id = this.uuid();
    this.#todos.push(todo);
    this.logTodos();
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.#todos.indexOf(todo);
    if (index !== -1) {
      this.#todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.logger(this.#todos);
  }
}
