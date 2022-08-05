import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;

  const contactMock = {
    id: 0,
    name: '',
    title: '',
    lastName: '',
    description: '',
    telephones: [{ ddd: '', phoneNumber: '' }],
    profilePhoto: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpClientTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getTodos method', () => {

    spyOn(service.http, 'get').and.callFake(() => of());

    service.getContacts().subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.get).toHaveBeenCalledWith(`${environment.api}/contacts`);
  });

  it('should test getTodo method', () => {

    spyOn(service.http, 'get').and.callFake(() => of());

    const result = service.getContanct(contactMock.id).subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.get).toHaveBeenCalledWith(`${environment.api}/contacts/${contactMock.id}`);
  });

  it('should test addTodo method', () => {
    spyOn(service.http, 'post').and.callFake(() => of());

    const result = service.addContanct(contactMock).subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.post).toHaveBeenCalledWith(`${environment.api}/contacts/`, contactMock);
  });

  it('should test updateTodo method', () => {
    spyOn(service.http, 'put').and.callFake(() => of());

    const result = service.updateContanct(contactMock).subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.put).toHaveBeenCalledWith(`${environment.api}/contacts/${contactMock.id}`, contactMock);
  });

  it('should test removeTodo method', () => {
    spyOn(service.http, 'delete').and.callFake(() => of());

    const result = service.removeContanct(contactMock).subscribe({
        next: (res) => expect(res).toBeDefined()
    });

    expect(service.http.delete).toHaveBeenCalledWith(`${environment.api}/contacts/${contactMock.id}`);
  });
});
