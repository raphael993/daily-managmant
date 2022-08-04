import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup }  from  '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/shared/models/todo.model';
import { TodoService } from 'src/shared/services/todo.service';
import { AddTodo, GetTodos, RemoveTodo, UpdateTodo } from 'src/shared/state/todo/todo.actions';
import { TodosState, TodoStateModel } from 'src/shared/state/todo/todo.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Select(TodosState) todosState$: Observable<TodoStateModel> | undefined;

  constructor(
    readonly formBuilder: FormBuilder,
    readonly todoService: TodoService,
    readonly store: Store
  ) { }

  showButtonAllTodos = false;
  showTodoForm = false;
  isEdditingForm = false;
  todoList: any;
  todoForm: any;
  todaysTodos: Array<Todo> = [];


  ngOnInit(): void {
    this.createSubscribes();
    this.createTodoForm();
    this.getTodos();
  }

  createSubscribes() {
    this.subscribeToTodos();
  }
    
  subscribeToTodos() {
    this.todosState$?.subscribe(res => {
      this.todoList = res.todos;
      this.todaysTodos = this.filterTodaysTodos(this.todoList);
    });
  }
  
  createTodoForm(): FormGroup {
    return this.todoForm = this.formBuilder.group({
      _id: [null],
      todoName: [null],
      todoDescription: [null],
      todoDate: [null],
      todoTime: [null],
      todoLocation: [null],
      todoStatus: [null]
    });
  }

  getTodos() {
    this.store.dispatch(new GetTodos());
  }

  onSubmitTodoForm() {
    this.store.dispatch(new AddTodo(this.todoForm.value));
    this.updateData();
    return this.toggleTodoForm();
  }

  onSubmitEditTodoForm() {
    this.store.dispatch(new UpdateTodo(this.todoForm.value));
    this.toggleTodoForm();
    return this.updateData();
  }

  onRemoveTodo(todo: Todo) {
    this.store.dispatch(new RemoveTodo(todo));
    return this.updateData();
  }

  onEditTodo(todo: Todo) {
    this.todoForm.patchValue({
      _id: todo._id,
      todoName: todo.todoName,
      todoDescription: todo.todoDescription,
      todoDate: todo.todoDate,
      todoTime: todo.todoTime,
      todoLocation: todo.todoLocation,
      todoStatus: todo.todoStatus
    });

    this.isEdditingForm = true;
    return this.toggleTodoForm();
  }

  filterTodaysTodos(todos: Array<Todo>): Array<Todo> {

    const today = new Date();

     return todos.filter( todo => {
      let day = new Date(todo.todoDate).getDay() + 1;
      return day === today.getDay();
    });

  };

  toggleButtonAllTodos(): boolean {
    return this.showButtonAllTodos = !this.showButtonAllTodos;
  }

  toggleTodoForm(): boolean {
    return this.showTodoForm = !this.showTodoForm;
  }

  updateData() {
    this.todoForm.reset();
    this.isEdditingForm = false;
  }

  onCancelTodoForm() {
    this.updateData();
    this.toggleTodoForm();
  }

}
