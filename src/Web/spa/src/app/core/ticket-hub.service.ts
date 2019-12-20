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

    constructor(private store: Store<State>) {
        console.log(store);
    }

    async initialize() {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:5002/hubs/tickets")
            .withAutomaticReconnect()
            .build();

        this.hubConnection.on('addTicket', (params) => this.handleAddTicket(params));
        
        this.hubConnection.onreconnecting(() => {
            console.log('disconnected');
        });
        
        this.hubConnection.onreconnected(() => {
            console.log('reconnected');
            this.store.dispatch(TicketStackActions.loadTickets());
        });
        
        try {
            await this.hubConnection.start();
            console.log('connected');
        }
        catch(err) {
            console.log(err);
        }
    }

    private handleAddTicket(params: any) {
        console.log('adding ticket...', params);
        console.log(this.store);
        this.store.dispatch(TicketHubActions.ticketAdded({ ticket: params }));
        console.log('added...')
    }
}
