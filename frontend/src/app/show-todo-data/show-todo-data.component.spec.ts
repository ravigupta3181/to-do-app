import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTodoDataComponent } from './show-todo-data.component';

describe('ShowTodoDataComponent', () => {
  let component: ShowTodoDataComponent;
  let fixture: ComponentFixture<ShowTodoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTodoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTodoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
