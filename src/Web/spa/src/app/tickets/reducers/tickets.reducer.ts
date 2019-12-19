import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";
import { Ticket } from '../ticket.model';
import { TicketApiActions } from '../actions';

export const ticketsFeatureKey = 'tickets';

export interface State extends EntityState<Ticket> {
    selectedTicketId: string | null;
}

export function selectTicketId(ticket: Ticket): string {
    return ticket.id;
}

export function sortByDate(a: Ticket, b:Ticket): number {
    return a.date === b.date ? 0 : a.date > b.date ? 1 : -1;
}

export const adapter = createEntityAdapter<Ticket>({
    selectId: selectTicketId,
    sortComparer: sortByDate
});

export const initialState = adapter.getInitialState({
    selectedTicketId: null
});

const ticketReducer = createReducer(
    initialState,
    on(TicketApiActions.loadTicketsSuccess,
        (state, { tickets }) => adapter.addMany(tickets, state))
);

export function reducer(state: State, action: Action) {
    return ticketReducer(state, action);
}

export const getSelectedTicketId = (state: State) => state.selectedTicketId;