import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from 'src/shared/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(readonly http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(`${environment.api}/todos`);
  }

  getTodo(id: string): Observable<any> {
    return this.http.get(`${environment.api}/todos/${id}`);
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post(`${environment.api}/todos/`, todo);
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(`${environment.api}/todos/${todo._id}`, todo);
  }

  removeTodo(_id: string): Observable<any> {
    return this.http.delete(`${environment.api}/todos/${_id}`);
  }

}
