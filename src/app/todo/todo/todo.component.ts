import { Component, inject, Inject } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { LoggersInjectionToken } from "../../injection Tokens/loggers.injection-token";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent {
  todoService = inject(TodoService);
  loggers = inject(LoggersInjectionToken);
  todos: Todo[] = this.todoService.getTodos();
  todo = new Todo();
  constructor() {
    this.loggers.forEach(myLogger => myLogger.logger(this.todos))
  } // private todoService: TodoService
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
