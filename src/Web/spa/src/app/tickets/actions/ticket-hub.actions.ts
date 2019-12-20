import { createAction, props } from "@ngrx/store";
import { Ticket } from "../ticket.model";

export const ticketAdded = createAction(
    '[Ticket Hub] Ticket Added', 
    props<{ ticket: Ticket }>());