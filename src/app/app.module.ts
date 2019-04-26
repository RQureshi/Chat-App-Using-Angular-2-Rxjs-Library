import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ChatThreadComponent } from './Thread/chat-thread.component';
import { ThreadsService } from './shared/thread.service';
import { ChatThreadsComponent } from './Threads/chat-threads.component';
import { UsersService } from './shared/user-service';
import { MessagesService } from './shared/message.service';
import { ChatMessageComponent } from './message/chat-messages.component';
import { ChatWindowComponent } from './chatwindow/chat-window.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ChatPageComponent } from './chatpage/chat-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatThreadComponent,
    ChatThreadsComponent,
    ChatMessageComponent,
    ChatWindowComponent,
    FromNowPipe,
    ChatPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessagesService, ThreadsService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
