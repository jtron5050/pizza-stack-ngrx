import { Component, OnInit } from '@angular/core';
import { TicketHubService } from './core/ticket-hub.service';
import { Store, select } from '@ngrx/store';
import { State } from './reducers';
import { Observable } from 'rxjs';
import { selectTicketTotal, selectLoading } from './tickets/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spa';
  ticketCount$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(private ticketHubService: TicketHubService, private store: Store<State>) { 
    this.ticketCount$ = store.pipe(select(selectTicketTotal))
    this.loading$ = store.pipe(select(selectLoading));
  }

  ngOnInit() {
    
    this.ticketHubService.initialize();
  }

}
