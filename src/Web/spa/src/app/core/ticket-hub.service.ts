import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { Store } from '@ngrx/store';
import { State } from '../tickets/reducers';
import { TicketHubActions, TicketStackActions } from "../tickets/actions";

@Injectable({
    providedIn: 'root'
})
export class TicketHubService {
    private hubConnection: HubConnection;

    constructor(private store: Store<State>) { }

    async initialize() {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:5002/hubs/tickets")
            .withAutomaticReconnect()
            .build();

        this.hubConnection.on('addTicket', (params) => this.handleAddTicket(params));
        this.hubConnection.on('updateTicket', params => this.handleUpdateTicket(params));

        this.hubConnection.onreconnecting(() => { });

        this.hubConnection.onreconnected(() => this.store.dispatch(TicketStackActions.loadTickets()));

        try {
            await this.hubConnection.start();
        }
        catch (err) {
            console.log(err);
        }
    }

    private handleAddTicket(params: any) {
        this.store.dispatch(TicketHubActions.ticketAdded({ ticket: params }));
    }

    private handleUpdateTicket(params: any) {
        this.store.dispatch(TicketHubActions.ticketUpdated({ ticket: params }));
    }
}
