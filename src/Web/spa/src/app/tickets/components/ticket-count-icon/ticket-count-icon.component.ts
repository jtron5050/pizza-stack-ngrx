import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-count-icon',
  templateUrl: './ticket-count-icon.component.html',
  styleUrls: ['./ticket-count-icon.component.css']
})
export class TicketCountIconComponent {
  @Input() count: number | null;
  @Input() loading: boolean;
  constructor() { }
}
