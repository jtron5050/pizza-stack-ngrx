import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketStackComponent } from './ticket-stack/ticket-stack.component';
import { StoreModule } from '@ngrx/store';
import * as fromTickets from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TicketStackEffects } from './effects/ticket-stack.effects';


@NgModule({
  declarations: [TicketStackComponent],
  exports:[
    TicketStackComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTickets.ticketFeatureKey, fromTickets.reducers),
    EffectsModule.forFeature([TicketStackEffects])
  ],
})
export class TicketsModule { }
