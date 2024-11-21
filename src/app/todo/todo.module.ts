import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TodoRoutingModule } from "./todo-routing.module";
import { StoreModule } from "@ngrx/store";
import { todoReducer, todoSliceName } from "./store";

@NgModule({
  // Hathouma les components pipes et directives eli tab3ini
  declarations: [TodoComponent, WeekTodoComponent],
  // Hathouma les modules elli nest7a9hom
  imports: [
    FormsModule,
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(todoSliceName, todoReducer)
  ],
  // Hathouma eli n7ab npartagihom m3a s7abi
  exports: [],
  // Hathoma el providers mta3i (mech s7i7)
  providers: [],
})
export class TodoModule {}
