import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTodoService } from '../create-todo.service';

@Component({
  selector: 'app-show-todo-data',
  templateUrl: './show-todo-data.component.html',
  styleUrls: ['./show-todo-data.component.css']
})
export class ShowTodoDataComponent implements OnInit {
  id: Object | undefined;
  todoList: any;

  constructor(private createService: CreateTodoService,
    private _route: Router) { }
  todos: any[] = [];



  ngOnInit() {
    this.getAllData()
  }
  edit(id: any) {
    this._route.navigate(['editTodo', id]);

  }

  getAllData() {
    this.createService.getData().subscribe(data => {
      this.todos = data;
    })
  }

  // update(id: any) {
  //   this.createService.updateData(id).subscribe(data => {
  //     this.id = data;
  //   })
  // }

  delete(id: any) {
    this._route.navigate(['showtododata']);

  }

  deleteById(id: any) {
    this.createService.deleteData(id).subscribe(data => {
      // this.todoList = this.todoList.filter((todo:any) => {
      //   if(!(todo.id == id))
      //   return todo
      // });
      this.getAllData();
      console.log('this is delete data::', data);
    })
  }
}




