import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { TodoService } from 'src/services/todo.service';
import { ContactService } from 'src/services/contact.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [TodoService, ContactService]
})
export class SharedModule { }
