import { Component, OnInit } from '@angular/core';
import * as fromTickets from '../reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ticket } from "../ticket.model";
import { TicketStackActions }from '../actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-stack',
  templateUrl: './ticket-stack.component.html',
  styleUrls: ['./ticket-stack.component.css']
})
export class TicketStackComponent implements OnInit {
  tickets$: Observable<Ticket[]>;

  constructor(private store: Store<fromTickets.State>) { 
    this.tickets$ = store.pipe(
      select(fromTickets.selectAllTickets), 
    );
  }
  
  ngOnInit() {
    this.store.dispatch(TicketStackActions.loadTickets());
  }
}
