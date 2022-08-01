import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { TodoService } from 'src/shared/services/todo.service';
import { ContactService } from 'src/shared/services/contact.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [TodoService, ContactService]
})
export class SharedModule { }
