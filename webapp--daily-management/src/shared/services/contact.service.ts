import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/shared/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(readonly http: HttpClient) { }

  api = 'http://localhost:3000';

  getContacts(): Observable<any> {
    return this.http.get(`${this.api}/contacts`);
  }

  getContanct(id: number): Observable<any> {
    return this.http.get(`${this.api}/contacts/${id}`);
  }

  addContanct(contact: Contact): Observable<any> {
    return this.http.post(`${this.api}/contacts/${contact}`, contact);
  }

  updateContanct(contanct: Contact): Observable<any> {
    return this.http.put(`${this.api}/contacts/${contanct.id}`, contanct);
  }

  removeContanct(contanct: Contact): Observable<any> {
    return this.http.delete(`${this.api}/contacts/${contanct.id}`);
  }
  
}
