import { Component, inject, Inject } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoService = inject(TodoService);
  todos: Todo[] = this.todoService.getTodos();
  todo = new Todo();
  constructor() {} // private todoService: TodoService
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
