import { Component, inject, Inject } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { LoggersInjectionToken } from "../../injection Tokens/loggers.injection-token";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { TodoState } from "../store";
import { todosSelector } from "../store/selectors";
import { todoComponantActionGroup } from "../store/actions";
import { NgFor, AsyncPipe } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService],
    standalone: true,
    imports: [
        NgFor,
        ReactiveFormsModule,
        FormsModule,
        AsyncPipe,
    ],
})
export class TodoComponent {
  todoService = inject(TodoService);
  loggers = inject(LoggersInjectionToken);
  store = inject(Store<TodoState>);
  // todos: Todo[] = this.todoService.getTodos();
  todos$: Observable<Todo[]> = this.store.select(todosSelector);
  todo = new Todo();
  constructor() {
    this.store.dispatch(todoComponantActionGroup.loadTodos())
    // this.loggers.forEach((myLogger) => myLogger.logger(this.todos));
  //   this.todoService.getTodosFromApi().subscribe({
  //     next: (todos) => {
  //       console.log(todos);
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     },
  //   });
  } // private todoService: TodoService
  addTodo() {
    this.store.dispatch(todoComponantActionGroup.addTodo({todo:this.todo}));
    //this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.store.dispatch(todoComponantActionGroup.deleteTodo({id:todo.id}));
    //this.todoService.deleteTodo(todo);
  }
}
