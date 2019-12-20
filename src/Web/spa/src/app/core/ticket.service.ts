import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../tickets/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private TICKETS: Ticket[] = [
    { id: '1', date: "2019-12-18T12:00:00-05:00", type: 'EXTRAMOSTBESTEST CHEESE', customerId: '1', size: 'L' },
    { id: '2', date: "2019-12-18T12:10:00-05:00", type: 'EXTRAMOSTBESTEST CHEESE', customerId: '2', size: 'L' },
    { id: '3', date: "2019-12-18T12:20:00-05:00", type: 'EXTRAMOSTBESTEST PEPPERONI', customerId: '3', size: 'L' },
    { id: '4', date: "2019-12-18T12:30:00-05:00", type: '3 MEAT TREAT', customerId: '4', size: 'M' },
  ];

  constructor() { }

  getTickets(): Observable<Ticket[]> {
    return of(this.TICKETS);
  }
}
