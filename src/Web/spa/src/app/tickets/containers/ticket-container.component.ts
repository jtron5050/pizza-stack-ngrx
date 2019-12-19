import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Ticket } from '../ticket.model';
import { State, selectAllTickets } from '../reducers';
import { Store, select } from '@ngrx/store';

import { loadTickets } from '../actions/ticket-stack.actions';

@Component({
    selector: 'app-ticket-container',
    templateUrl: 'ticket-container.component.html'
})
export class TicketContainerComponent implements OnInit{
    tickets$: Observable<Ticket[]>;

    constructor(private store: Store<State>) {
        this.tickets$ = store.pipe(select(selectAllTickets));
    }

    ngOnInit(): void {
        this.store.dispatch(loadTickets());
    }
}