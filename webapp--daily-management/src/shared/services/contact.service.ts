import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from 'src/shared/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(readonly http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(`${environment.api}/contacts`);
  }

  getContanct(id: number): Observable<any> {
    return this.http.get(`${environment.api}/contacts/${id}`);
  }

  addContanct(contact: Contact): Observable<any> {
    return this.http.post(`${environment.api}/contacts/`, contact);
  }

  updateContanct(contanct: Contact): Observable<any> {
    return this.http.put(`${environment.api}/contacts/${contanct.id}`, contanct);
  }

  removeContanct(contanct: Contact): Observable<any> {
    return this.http.delete(`${environment.api}/contacts/${contanct.id}`);
  }
  
}
