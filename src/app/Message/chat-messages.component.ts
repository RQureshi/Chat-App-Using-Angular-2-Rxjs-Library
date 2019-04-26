import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../Message/message-model';
import { User } from '../user/user-model';
import { UsersService } from '../shared/user-service';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public UsersService: UsersService) {
  }

  ngOnInit(): void {
    console.log(this.message);
    this.UsersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
          if (this.message.author && user) {
            this.incoming = this.message.author.id !== user.id;
          }
        });
  }
}

