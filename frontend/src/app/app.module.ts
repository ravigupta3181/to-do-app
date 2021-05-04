import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowTodoDataComponent } from './show-todo-data/show-todo-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    ShowTodoDataComponent,
    PageNotFoundComponent,
    EditTodoComponent,
    ViewTodoComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
