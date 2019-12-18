import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketStackComponent } from './ticket-stack/ticket-stack.component';
import { StoreModule } from '@ngrx/store';
import * as fromTickets from './reducers';


@NgModule({
  declarations: [TicketStackComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('tickets', fromTickets.reducer)
  ],
  exports:[
    TicketStackComponent
  ]
})
export class TicketsModule { }
