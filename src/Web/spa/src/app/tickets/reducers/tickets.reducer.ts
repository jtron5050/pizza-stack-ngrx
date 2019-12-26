import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";
import { Ticket } from '../ticket.model';
import { TicketApiActions, TicketHubActions, TicketStackActions } from '../actions';

export const ticketsFeatureKey = 'tickets';

export interface State extends EntityState<Ticket> {
    loading: boolean;
    selectedTicketId: string | null;
}

export function selectTicketId(ticket: Ticket): string {
    return ticket.id;
}

export function sortByDate(a: Ticket, b:Ticket): number {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return aDate === bDate ? 0 : aDate > bDate ? -1 : 1;
}

export const adapter = createEntityAdapter<Ticket>({
    selectId: selectTicketId,
    sortComparer: sortByDate
});

export const initialState = adapter.getInitialState({
    loading: true,
    selectedTicketId: null
});

const ticketReducer = createReducer(
    initialState,
    on(TicketStackActions.loadTickets,
        state => ({ ...state, loading: true })),
    on(TicketApiActions.loadTicketsSuccess,
        (state, { tickets }) => adapter.addAll(tickets, {...state, loading: false })),
    on(TicketHubActions.ticketAdded, (state, { ticket }) => { console.log(ticket); return adapter.addOne(ticket, state);})
);

export function reducer(state: State, action: Action) {
    return ticketReducer(state, action);
}
