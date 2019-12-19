import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromTickets from './reducers';
import { TicketStackEffects } from './effects/ticket-stack.effects';
import { TicketContainerComponent } from './containers/ticket-container.component';
import { TicketStackComponent } from './components/ticket-stack/ticket-stack.component';


@NgModule({
  declarations: [TicketContainerComponent, TicketStackComponent],
  exports:[
    TicketContainerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTickets.ticketFeatureKey, fromTickets.reducers),
    EffectsModule.forFeature([TicketStackEffects])
  ],
})
export class TicketsModule { }
