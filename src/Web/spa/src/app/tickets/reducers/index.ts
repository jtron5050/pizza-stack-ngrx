import * as fromTicket from './tickets.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const ticketFeatureKey = 'ticket';

export interface State {
    [ticketFeatureKey]: fromTicket.State;
}

export const reducer = fromTicket.reducer;

export const selectTicketState = createFeatureSelector<fromTicket.State>('tickets');

export const selectTicketIds = createSelector(selectTicketState, fromTicket.selectTicketIds);
