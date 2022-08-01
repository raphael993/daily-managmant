import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/shared/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(readonly http: HttpClient) { }

  api = 'http://localhost:3000';

  getTodos(): Observable<any> {
    return this.http.get(`${this.api}/todos`);
  }

  getTodo(id: string): Observable<any> {
    return this.http.get(`${this.api}/todos/${id}`);
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post(`${this.api}/todos/`, todo);
  }

  updateTodo(todo: Todo): Observable<any> {
    debugger
    return this.http.put(`${this.api}/todos/${todo._id}`, todo);
  }

  removeTodo(_id: string): Observable<any> {
    return this.http.delete(`${this.api}/todos/${_id}`);
  }

}
