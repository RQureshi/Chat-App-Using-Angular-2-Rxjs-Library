import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadsService } from '../shared/thread.service';
import { Thread } from '../Thread/thread-model';

@Component({
  selector: 'chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;
  selected = false;

  constructor(public threadsService: ThreadsService) {
  }

  ngOnInit(): void {

    //code for selecting the current thread
    this.threadsService.currentThread
    //this method will subscribe to all the threads in the currentThread 
    //property of ThreadService
      .subscribe( (currentThread: Thread) => {
  //Will resturn true if the passed object and
// its id is equal to the selected object
        this.selected = currentThread && this.thread &&
        (currentThread.id === this.thread.id);
     
      });
  }

  clicked(event: any): void {
    console.log( this.thread);
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
