import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGroupComponent } from './todo-group.component';

describe('TodoGroupComponent', () => {
  let component: TodoGroupComponent;
  let fixture: ComponentFixture<TodoGroupComponent>;

  const todoMock = {
    _id: 'xxx',
    todoName: '',
    todoDescription: '',
    todoDate: '',
    todoTime: '',
    todoLocation: '',
    todoStatus: ''
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onRemoveTodo method', () => {
    spyOn(component.removeTodo, 'emit');

    component.onRemoveTodo(todoMock);

    expect(component.removeTodo.emit).toHaveBeenCalledWith(todoMock);
  });

  it('should test onEditTodo method', () => {
    spyOn(component.editTodo, 'emit');

    component.onEditTodo(todoMock);

    expect(component.editTodo.emit).toHaveBeenCalledWith(todoMock);
  });

  it('should test isTodayTodo method TRUE', () => {
    const date = new Date();
    todoMock.todoDate = date.getFullYear() + ('-0' + (date.getMonth() + 1)).slice(-3) + ('-0' + (date.getDay())).slice(-3);

    const result = component.isTodayTodo(todoMock);

    expect(result).toBeTrue();
  });

  it('should test isTodayTodo method FALSE', () => {
    const date = new Date();
    todoMock.todoDate = date.getFullYear() + ('-0' + (date.getMonth() + 1)).slice(-3) + ('-0' + (date.getDay() + 3)).slice(-3);

    const result = component.isTodayTodo(todoMock);

    expect(result).toBeFalse();
  });
});
