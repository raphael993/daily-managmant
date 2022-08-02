import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { Todo } from 'src/shared/models/todo.model';
import { TodoService } from 'src/shared/services/todo.service';
import { AddTodo, AddTodoSuccess, GetTodos, GetTodosSuccess, RemoveTodo, RemoveTodoSuccess, UpdateTodo } from './todo.actions';

export interface TodoStateModel {
  todos: Array<Todo>
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
  }
})
@Injectable()
export class TodosState {
  constructor(private todoService: TodoService, private store: Store) {}

  @Action(GetTodos)
  getTodos() {
    this.todoService.getTodos().subscribe(res => {
      this.store.dispatch(new GetTodosSuccess(res));
    })
  }

  @Action(GetTodosSuccess)
  getTodosSuccess(ctx: StateContext<TodoStateModel>, action: GetTodosSuccess) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: action.payload
    });
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    this.todoService.addTodo(action.payload).subscribe(res => {
      this.store.dispatch(new AddTodoSuccess(action.payload));
    })
  }

  @Action(AddTodoSuccess)
  addTodoSuccess(ctx: StateContext<TodoStateModel>, action: AddTodoSuccess) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: [...state.todos, action.payload]
    });
  }

  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, action: UpdateTodo) {
    this.todoService.updateTodo(action.payload).subscribe(res => {
      this.store.dispatch(new GetTodos());
    })
  }

  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    this.todoService.removeTodo(action.payload._id).subscribe(res => {
      this.store.dispatch(new RemoveTodoSuccess(action.payload));
    })
  }

  @Action(RemoveTodoSuccess)
  removeTodoSuccess(ctx: StateContext<TodoStateModel>, action: RemoveTodoSuccess) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: state.todos.filter( todo => todo._id !== action.payload._id)
    });
  }
}