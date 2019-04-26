import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../shared/thread.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<any>;
  constructor(private _threadsServices:ThreadsService) { }

  ngOnInit() {
   // console.log(this.threads);
   this.threads= this._threadsServices.orderedThreads
  // console.log(this.threads);
  }


}
