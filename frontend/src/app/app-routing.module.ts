import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowTodoDataComponent } from './show-todo-data/show-todo-data.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  { path: '', redirectTo: '/showtododata', pathMatch: 'full'},
  { path: 'createtodo', component: ToDoComponent },
  { path: 'showtododata', component: ShowTodoDataComponent },
  { path: 'editTodo/:id', component: EditTodoComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
