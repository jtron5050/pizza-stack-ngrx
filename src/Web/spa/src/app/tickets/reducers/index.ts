import { createFeatureSelector, createSelector, combineReducers, Action } from '@ngrx/store';

import * as fromRoot from '../../reducers'
import * as fromTickets from './tickets.reducer';

export const ticketFeatureKey = 'tickets';

export interface TicketsState {
    [fromTickets.ticketsFeatureKey]: fromTickets.State
}

export interface State extends fromRoot.State {
    [ticketFeatureKey]: TicketsState;
}


/** Provide reducer in AoT-compilation happy way */
export function reducers(state: TicketsState | undefined, action: Action) {
    return combineReducers({
      [fromTickets.ticketsFeatureKey]: fromTickets.reducer,
    })(state, action);
  }

export const selectTicketState = createFeatureSelector<State, TicketsState>(ticketFeatureKey);

export const selectTicketEntitiesState = createSelector(
    selectTicketState,
    state => state.tickets
);

export const {
    selectIds: selectTicketIds,
    selectEntities: selectTicketEntities,
    selectAll: selectAllTickets,
    selectTotal: selectTicketTotal
} = fromTickets.adapter.getSelectors(selectTicketEntitiesState);

export const selectLoading = createSelector(
    selectTicketEntitiesState,
    state => state.loading
)
