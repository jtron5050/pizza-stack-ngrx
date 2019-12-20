import { Component, OnInit } from '@angular/core';
import { TicketHubService } from './core/ticket-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spa';
  
  constructor(private ticketHubService: TicketHubService) { }

  ngOnInit() {
    
    this.ticketHubService.initialize();
  }

}
