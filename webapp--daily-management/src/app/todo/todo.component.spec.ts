import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { TodoComponent } from './todo.component';
import { TodosState } from 'src/shared/state/todo/todo.state';
import { AddTodo, RemoveTodo, UpdateTodo } from 'src/shared/state/todo/todo.actions';



describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store

  let createSubscribesSpy: any;
  let createTodoFormSpy: any;
  let getTodosSpy: any;
  let updateDataSpy: any;
  let toggleTodoFormSpy: any;
  let dispatchSpy: any;

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
      declarations: [ TodoComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxsModule.forRoot([TodosState]), 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);

    createSubscribesSpy = spyOn(component, 'createSubscribes');
    createTodoFormSpy = spyOn(component, 'createTodoForm');
    getTodosSpy = spyOn(component, 'getTodos');
    updateDataSpy = spyOn(component, 'updateData');
    toggleTodoFormSpy = spyOn(component, 'toggleTodoForm');
    dispatchSpy = spyOn(component.store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test init methods', () => {

    component.ngOnInit();

    expect(createSubscribesSpy).toHaveBeenCalled();
    expect(component.createTodoForm).toHaveBeenCalled();
    expect(component.getTodos).toHaveBeenCalled();
  });
  
  it('should test onSubmitTodoForm method', () => {

    component.onSubmitTodoForm();

    expect(component.store.dispatch).toHaveBeenCalledWith(new AddTodo(component.todoForm.value));
    expect(updateDataSpy).toHaveBeenCalled();
    expect(toggleTodoFormSpy).toHaveBeenCalled();
  });

  it('should test onSubmitEditTodoForm method', () => {

    component.onSubmitEditTodoForm();

    expect(component.store.dispatch).toHaveBeenCalledWith(new UpdateTodo(component.todoForm.value));
    expect(updateDataSpy).toHaveBeenCalled();
    expect(toggleTodoFormSpy).toHaveBeenCalled();
  });

  it('should test onRemoveTodo method', () => {

    component.onRemoveTodo(todoMock);

    expect(component.store.dispatch).toHaveBeenCalledWith(new RemoveTodo(todoMock));
    expect(updateDataSpy).toHaveBeenCalled();
  });

  it('should test onEditTodo method', () => {

    component.onEditTodo(todoMock);

    expect(component.todoForm.value['_id']).toEqual(todoMock._id);
    expect(toggleTodoFormSpy).toHaveBeenCalled();
  });

  it('should test filterTodaysTodos method with one for today', () => {
    const date = new Date();
    todoMock.todoDate = date.getFullYear() + ('-0' + (date.getMonth() + 1)).slice(-3) + ('-0' + (date.getDay())).slice(-3); // YYYY-mm-dd

    const todayTodos = component.filterTodaysTodos([todoMock]);

    expect(todayTodos.length).toEqual(1);
  });

  it('should test filterTodaysTodos method with no one for today', () => {
    const date = new Date();
    todoMock.todoDate = date.getFullYear() + ('-0' + (date.getMonth() + 1)).slice(-3) + ('-0' + (date.getDay() + 3)).slice(-3); // YYYY-mm-dd

    const todayTodos = component.filterTodaysTodos([todoMock]);

    expect(todayTodos.length).toEqual(0);
  });

  it('should test toggleButtonAllTodos method', () => {
    component.showButtonAllTodos = true;

    component.toggleButtonAllTodos();

    expect(component.showButtonAllTodos).toBeFalse();
  });

  /* it('should test toggleTodoForm method', () => {
    component.showTodoForm = true;

    component.toggleTodoForm();

    expect(component.showTodoForm).toBeFalse();
  }); */

  /* it('should test updateData method', () => {
    spyOn(component.todoForm, 'reset');
    
    component.updateData();

    expect(component.todoForm.reset).toHaveBeenCalled();
    expect(component.isEdditingForm).toBeFalse();
  }); */

  it('should test onCancelTodoForm method', () => {
    component.onCancelTodoForm();

    expect(updateDataSpy).toHaveBeenCalled();
    expect(toggleTodoFormSpy).toHaveBeenCalled();
  })
});
