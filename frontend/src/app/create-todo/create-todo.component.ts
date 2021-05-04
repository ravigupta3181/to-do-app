import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTodoService } from '../create-todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  @Input() isCreate: boolean | undefined;
  @Input() isEdit: boolean | undefined;

  todoForm!: FormGroup;
  value: any;
  id: any;
  todoData: any;

  constructor(private fb: FormBuilder,
    private createService: CreateTodoService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log('this is iscreate::', this.isCreate);
    // console.log('this is the isEdit::', this.isEdit);
    this.createForm();
    if (this.isEdit) {
      this.getIdByUrl();
    }
  }

  createForm() {
    this.todoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      title: ['', [Validators.required, Validators.minLength(12)]]

    })
  }

  get controls() {
    return this.todoForm.controls;
  }



  onSubmit() {
    let formValue = this.todoForm.getRawValue();
    // console.log("this is formValue::",formValue)
     if (this.isEdit != true) {
      this.createService.postData(formValue).subscribe(data => {
        this.todoForm.reset();
    this._route.navigate(['showtododata'])
       })    
     } else {
      this.update(formValue);
      }

  }

  goBack() {
    this._route.navigate(['showtododata']);
  }

  getIdByUrl() {
    this._activatedRoute.params.subscribe(data => {
      // console.log('this is the id::', data)
      this.id = data.id;
      this.getTodo(this.id);
    })
  }

  getTodo(id: any) {
    this.createService.getDataById(id).subscribe(data => {
      // console.log('this is the data::', data);
      this.todoData = data;
      this.todoForm.get("firstName")?.setValue(this.todoData.firstname);
      this.todoForm.get("lastName")?.setValue(this.todoData.lastname);
      this.todoForm.patchValue(this.todoData)
    })
  }

  update(formValue: any) {
    formValue['id'] = this.id;
    // let formValue = this.todoForm.getRawValue();
    this.createService.updateData(formValue).subscribe(data => {
      console.log("this is update::", data)
      this._route.navigate(['showtododata']);
    }, err => {
      console.log('this is the err::', err);
    })
  }


}
