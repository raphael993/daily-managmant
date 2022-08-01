import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  @Input() todoForm: any;
  @Input() isEdditingForm = false;

  @Output() submitTodoForm = new EventEmitter();
  @Output() submitEditTodoForm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmitTodoForm() {
    this.submitTodoForm.emit();
  }

  onSubmitEditTodoForm() {
    this.submitEditTodoForm.emit()
  }

  onCancel() {
    this.cancel.emit();
  }

}
