import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  const todoMock = {
    _id: 'xxx',
    todoName: '',
    todoDescription: '',
    todoDate: '',
    todoTime: '',
    todoLocation: '',
    todoStatus: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getTodos method', () => {

    spyOn(service.http, 'get').and.callFake(() => of());

    service.getTodos().subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.get).toHaveBeenCalled();
  });

  it('should test getTodo method', () => {

    spyOn(service.http, 'get').and.callFake(() => of());

    const result = service.getTodo(todoMock._id).subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.get).toHaveBeenCalled();
  });

  it('should test addTodo method', () => {
    spyOn(service.http, 'post').and.callFake(() => of());

    const result = service.addTodo(todoMock).subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.post).toHaveBeenCalled();
  });

  it('should test updateTodo method', () => {
    spyOn(service.http, 'put').and.callFake(() => of());

    const result = service.updateTodo(todoMock).subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.put).toHaveBeenCalled();
  });

  it('should test removeTodo method', () => {
    spyOn(service.http, 'delete').and.callFake(() => of());

    const result = service.removeTodo(todoMock._id).subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.delete).toHaveBeenCalled();
  });
});
