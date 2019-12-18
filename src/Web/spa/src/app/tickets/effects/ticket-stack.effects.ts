import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { TicketStackActions } from "../actions";
import { switchMap } from "rxjs/operators";
@Injectable()
export class TicketStackEffects {
    loadCollection$ = createEffect(() => this.actions$.pipe(
        ofType(TicketStackActions.loadCollection),
        switchMap(() => {
            CollectionApiActions.loadTicketsSuccess()
        })
    ));

    constructor(private actions$: Actions) {}
}