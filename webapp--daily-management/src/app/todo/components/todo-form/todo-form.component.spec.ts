import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onSubmitTodoForm method', () => {
    spyOn(component.submitTodoForm, 'emit');

    component.onSubmitTodoForm();

    expect(component.submitTodoForm.emit).toHaveBeenCalled();
  });

  it('should test onSubmitEditTodoForm method', () => {
    spyOn(component.submitEditTodoForm, 'emit');

    component.onSubmitEditTodoForm();

    expect(component.submitEditTodoForm.emit).toHaveBeenCalled();
  });

  it('should test onCancel method', () => {
    spyOn(component.cancel, 'emit');

    component.onCancel();

    expect(component.cancel.emit).toHaveBeenCalled();
  });
});
