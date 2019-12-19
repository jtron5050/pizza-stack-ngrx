import { Component, OnInit, Input } from '@angular/core';

import { Ticket } from "../../ticket.model";

@Component({
  selector: 'app-ticket-stack',
  templateUrl: './ticket-stack.component.html',
  styleUrls: ['./ticket-stack.component.css']
})
export class TicketStackComponent implements OnInit {
  @Input() tickets: Ticket[];

  constructor() { 

  }
  
  ngOnInit() {
  }
}
