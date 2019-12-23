import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromTickets from './reducers';
import { TicketStackEffects } from './effects/ticket-stack.effects';
import { TicketContainerComponent } from './containers/ticket-container.component';
import { TicketStackComponent } from './components/ticket-stack/ticket-stack.component';
import { TicketPreviewComponent } from './components/ticket-preview/ticket-preview.component';
import { TicketCountIconComponent } from './components/ticket-count-icon/ticket-count-icon.component';


@NgModule({
  declarations: [TicketContainerComponent, TicketStackComponent, TicketPreviewComponent, TicketCountIconComponent],
  exports:[
    TicketContainerComponent,  TicketCountIconComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTickets.ticketFeatureKey, fromTickets.reducers),
    EffectsModule.forFeature([TicketStackEffects])
  ],
})
export class TicketsModule { }
