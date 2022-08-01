import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  @Input() todoForm: any;
  @Output() submitTodoForm = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmitTodoForm() {
    this.submitTodoForm.emit();
  }

}
