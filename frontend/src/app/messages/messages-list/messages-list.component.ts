import { MessagesApiService } from './../messages-api.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  private messages: Message[];

  constructor(private messagesApiService: MessagesApiService) { }

  ngOnInit() {
    this.messagesApiService.findAll().subscribe(data => {
      this.messages = data;
    });
  }

}
