import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { todoComponantActionGroup } from "./actions";
import { map, of, switchMap } from "rxjs";
import { Todo } from "../model/todo";
import { UUIDInjectionToken } from "../../injection Tokens/uuid.injection-token";

@Injectable({ providedIn: 'root' })
export class TodoEffect {
  actions$ = inject(Actions);
  uuid = inject(UUIDInjectionToken);

  loadTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(todoComponantActionGroup.loadTodos),
      switchMap(() =>
        of([
          new Todo(this.uuid(), 'Lundi', 'Commencer à travailler'),
          new Todo(this.uuid(), 'Samedi', 'Se reposer'),
        ])
      ),
      map((todos) => todoComponantActionGroup.todosLoaded({todos: todos}))
    )
  );
}
