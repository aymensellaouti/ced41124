import { Component, inject, Inject } from "@angular/core";
import { TodoService } from "../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],

})
export class TodoComponent {
  todoService = inject(TodoService);
  constructor(
    // private todoService: TodoService
  ) {}
}
