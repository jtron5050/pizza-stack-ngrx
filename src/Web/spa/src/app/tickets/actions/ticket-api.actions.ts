import { createAction, props } from "@ngrx/store";
import { Ticket } from "../ticket.model";

export const loadTicketsSuccess = createAction(
    '[Ticket Api] Load Tickets Success', 
    props<{ tickets: Ticket[] }>());

export const loadTicketsFailure = createAction(
    '[Ticket Api] Load Tickets Failure',
    props<{ error: any }>());