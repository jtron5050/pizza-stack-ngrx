import { Component, OnInit, Input } from '@angular/core';

import { Ticket } from "../../ticket.model";

@Component({
  selector: 'app-ticket-stack',
  templateUrl: './ticket-stack.component.html',
  styleUrls: ['./ticket-stack.component.css']
})
export class TicketStackComponent {
  @Input() tickets: Ticket[];
  @Input() count: number | null;
  @Input() loading: boolean;

  constructor() { }
}
