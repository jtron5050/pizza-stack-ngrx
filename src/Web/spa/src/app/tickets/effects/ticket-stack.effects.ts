import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { TicketStackActions, TicketApiActions } from "../actions";
import { switchMap, catchError, map, tap } from "rxjs/operators";
import { TicketService } from 'src/app/core/ticket.service';
import { Ticket } from '../ticket.model';
import { of } from 'rxjs';

@Injectable()
export class TicketStackEffects {
    constructor(private actions$: Actions, private ticketService: TicketService) { }

    loadCollection$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TicketStackActions.loadTickets),
            switchMap(() =>
                this.ticketService.getTickets().pipe(
                    map((tickets: Ticket[]) => TicketApiActions.loadTicketsSuccess({ tickets })),
                    catchError(error => of(TicketApiActions.loadTicketsFailure({ error })))
                )
            )
        )
    });
}