import { Component, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  messages: Message[] = [
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Meeting Reminder',
      msgText: 'Just a reminder that we have a meeting tomorrow at 10 AM.',
    },
    {
      id: 2,
      sender: 'Alice Smith',
      subject: 'Project Update',
      msgText: 'Here is the latest update on our project progress.',
    },
    {
      id: 3,
      sender: 'Bob Johnson',
      subject: 'Vacation Request',
      msgText:
        'I will be on vacation next week. Please approve my leave request.',
    },
  ];

  constructor() {}

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
