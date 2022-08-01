import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGroupComponent } from './todo-group.component';

describe('TodoGroupComponent', () => {
  let component: TodoGroupComponent;
  let fixture: ComponentFixture<TodoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
