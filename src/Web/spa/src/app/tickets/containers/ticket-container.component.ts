import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Ticket } from '../ticket.model';
import { State, selectAllTickets, selectTicketTotal, selectLoading } from '../reducers';
import { Store, select } from '@ngrx/store';

import { loadTickets } from '../actions/ticket-stack.actions';

@Component({
    selector: 'app-ticket-container',
    templateUrl: 'ticket-container.component.html'
})
export class TicketContainerComponent implements OnInit{
    tickets$: Observable<Ticket[]>;
    totalTickets$: Observable<number>;
    loading$: Observable<boolean>;

    constructor(private store: Store<State>) {
        this.tickets$ = store.pipe(select(selectAllTickets));
        this.totalTickets$ = store.pipe(select(selectTicketTotal));
        this.loading$ = store.pipe(select(selectLoading));
    }

    ngOnInit(): void {
        this.store.dispatch(loadTickets());
    }
}