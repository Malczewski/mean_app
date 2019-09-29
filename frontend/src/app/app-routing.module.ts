import { AddMessageComponent } from './messages/add-message/add-message.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'messages', component: MessagesListComponent },
  { path: 'add-message', component: AddMessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
