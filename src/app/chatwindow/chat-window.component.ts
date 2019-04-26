import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user-model';
import { UsersService } from '../shared/user-service';
import { Thread } from '../Thread/thread-model';
import { ThreadsService } from '../shared/thread.service';
import { Message } from '../Message/message-model';
import { MessagesService } from '../shared/message.service';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public UsersService: UsersService,
              public el: ElementRef) {
  }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;
    //console.log(this.threadsService.currentThreadMessages);
    //console.log(this.messages);
    //console.log(this.draftMessage);
    this.draftMessage = new Message();
    //console.log(this.draftMessage);
   // console.log(this.currentThread);
    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      });
      //console.log(this.currentThread);
    this.UsersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    this.messages
      .subscribe(
        (messages: Array<Message>) => {
          setTimeout(() => {
            //this.scrollToBottom();
          });
        });
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    console.log(this.draftMessage);
    console.log(this.currentThread);
    m.author = this.currentUser;
    m.thread = this.currentThread;
    console.log(this.currentThread);

    m.isRead = true;
   // console.log(m);
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
   // console.log(this.draftMessage);
  }

  // scrollToBottom(): void {
  //   const scrollPane: any = this.el
  //     .nativeElement.querySelector('.msg-container-base');
  //   scrollPane.scrollTop = scrollPane.scrollHeight;
  // }
}