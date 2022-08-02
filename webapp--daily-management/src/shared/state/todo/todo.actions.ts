import { Todo } from "src/shared/models/todo.model";

export class GetTodos {
  static readonly type = '[TODO] get all todos';
  constructor() {}
}

export class GetTodosSuccess {
  static readonly type = '[TODO] get all todos success';
  constructor(public payload: Array<Todo>) {}
}

export class GetTodo {
  static readonly type = '[TODO] get an todo per id';
  constructor(payload: { _id: string }) {}
}

export class GetTodoSuccess {
  static readonly type = '[TODO] get an todo per id';
  constructor(public payload: Array<Todo>) {}
}

export class AddTodo {
  static readonly type = '[TODO] add todo';
  constructor(public payload: Todo) {}
}

export class AddTodoSuccess {
  static readonly type = '[TODO] add todo success';
  constructor(public payload: Todo) {}
}

export class UpdateTodo {
  static readonly type = '[TODO] update todo';
  constructor(public payload: Todo) {}
}


export class RemoveTodo {
  static readonly type = '[TODO] remove todo';
  constructor(public payload: Todo) {}
}

export class RemoveTodoSuccess {
  static readonly type = '[TODO] remove todo success';
  constructor(public payload: Todo) {}
}

