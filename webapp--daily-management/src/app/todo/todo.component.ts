import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup }  from  '@angular/forms';
import { TodoService } from 'src/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) { }

  showButtonAllTodos = false;
  showTodoForm = false;
  isEdditingForm = false;
  todoList = [];
  todoForm: any 


  ngOnInit(): void {
    this.createTodoForm();
    this.getTodos();
  }

  createTodoForm() {
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
    return this.todoService.getTodos().subscribe(res => {
      this.todoList = res;
    })
  }

  toggleButtonAllTodos() {
    return this.showButtonAllTodos = !this.showButtonAllTodos;
  }

  toggleTodoForm() {
    return this.showTodoForm = !this.showTodoForm;
  }

  onSubmitTodoForm(event: any) {
    return this.todoService.addTodo(this.todoForm.value).subscribe(res => {
      this.toggleTodoForm();
      this.getTodos();
      this.todoForm.reset();
    })
  }

  onSubmitEditTodoForm(event: any) {
    return this.todoService.updateTodo(this.todoForm.value).subscribe(res => {
      this.toggleTodoForm();
      this.getTodos();
      this.isEdditingForm = false;
      this.todoForm.reset();
    })
  }

  onRemoveTodo(todo: any) {
    return this.todoService.removeTodo(todo._id).subscribe(res => {
      this.getTodos();
      this.todoForm.reset();
    })
  }

  onEditTodo(todo: any) {
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

  onCancelTodoForm() {
    this.toggleTodoForm();
    this.isEdditingForm = false;
    this.todoForm.reset();
  }

}
