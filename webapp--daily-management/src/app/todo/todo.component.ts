import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup }  from  '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  showButtonAllTodos = false;
  showTodoForm = false;
  todoForm: any 


  ngOnInit(): void {
    this.createTodoForm();
  }

  createTodoForm() {
    this.todoForm = this.formBuilder.group({
      todoName: [null],
      todoDescription: [null],
      todoWhen: [null],
      todoTime: [null]
    });
  }

  toggleButtonAllTodos() {
    this.showButtonAllTodos = !this.showButtonAllTodos;
  }

  toggleTodoForm() {
    this.showTodoForm = !this.showTodoForm;
  }

}
