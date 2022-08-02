import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/shared/models/todo.model';

@Component({
  selector: 'app-todo-group',
  templateUrl: './todo-group.component.html',
  styleUrls: ['./todo-group.component.scss']
})
export class TodoGroupComponent implements OnInit {

  constructor() { }

  @Input() todoList: any;
  @Output() removeTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();

  ngOnInit(): void {
  }

  onRemoveTodo(todo: any) {
    this.removeTodo.emit(todo);
  }

  onEditTodo(todo: any) {
    this.editTodo.emit(todo);
  }

  isTodayTodo(todo: Todo): boolean {
    return (new Date(todo.todoDate).getDay() + 1) === new Date().getDay();
  }

}
