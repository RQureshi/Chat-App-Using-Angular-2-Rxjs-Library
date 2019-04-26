import { Component } from '@angular/core';
import { ChatExampleData } from './data/chat-example-data';
import {ThreadsService} from  './shared/thread.service'
import { UsersService } from './shared/user-service';
import { MessagesService } from './shared/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Rxjs-Example';
  constructor(private _messageSerivce:MessagesService,private  _threadsService: ThreadsService,private _usersService:UsersService) {
   // debugger;
    ChatExampleData.init(_messageSerivce,_threadsService,_usersService);
  }
}
