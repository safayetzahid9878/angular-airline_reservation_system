import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

ticketData;
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.getTicket();
  }

  getTicket(){
    this.userService.getTicket().subscribe(
      (response) => {
        this.ticketData = response;
      }
    )
 }

}
