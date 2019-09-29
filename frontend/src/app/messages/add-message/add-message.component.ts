import { MessagesApiService } from './../messages-api.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {

  message: Message;
  constructor(
    private router: Router,
    private messagesApiService: MessagesApiService) {
      this.message = new Message();
     }

  ngOnInit() {
  }

  onSubmit() {
    this.messagesApiService.save(this.message).subscribe(result => this.gotoMessages());
  }

  gotoMessages() {
    this.router.navigate(['/messages']);
  }

}
