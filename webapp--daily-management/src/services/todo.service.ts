import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(readonly http: HttpClient) { }

  api = 'http://localhost:3000';

  getTodos(): Observable<any> {
    return this.http.get(`${this.api}/todos`);
  }

  getTodo(id: number): Observable<any> {
    return this.http.get(`${this.api}/todos/${id}`);
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post(`${this.api}/todos/${todo}`, todo);
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(`${this.api}/todos/${todo.id}`, todo);
  }

  removeTodo(todo: Todo): Observable<any> {
    return this.http.delete(`${this.api}/todos/${todo.id}`);
  }

}
