import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer } from "@ngrx/store";
import { Ticket } from '../ticket.model';


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

export const reducer = createReducer(initialState);

export const getSelectedUserId = (state: State) => state.selectedTicketId;

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors();

export const selectTicketIds = selectIds;
export const selectTicketEntities = selectEntities;
export const selectAllTickets = selectAll;
export const selectTicketTotal = selectTotal;