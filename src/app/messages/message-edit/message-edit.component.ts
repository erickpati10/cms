import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
} from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})
export class MessageEditComponent {
  @ViewChild('subjectInput') subjectInput: ElementRef;
  @ViewChild('msgTextInput') msgTextInput: ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender: string;

  constructor() {}

  onSendMessage() {
    const subjectValue: string = this.subjectInput.nativeElement.value;
    const msgTextValue: string = this.msgTextInput.nativeElement.value;

    const newMessage: Message = {
      id: 1,
      sender: 'Erick Patino',
      subject: subjectValue,
      msgText: msgTextValue,
    };

    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
