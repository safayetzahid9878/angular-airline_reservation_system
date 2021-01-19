import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  
  alldata;
  dataClass;
  formdata;
  ticketData;

// data = {
//   form : '',
//     to : '',
//     cls : '',
//     name : '',
//     date : '',
//     seats :  '',
//     price : ''
// }
  
  constructor(private userService : UserService, private router : Router ) { }

  ticketBook(data){
      this.userService.ticketBook(data);
      
  }


  ngOnInit() {
    this.getData();
    this.getClass();
    this.dataForm();
     this.getTicket();
  }

  getData(){
   this.userService.getUser().subscribe(
     (response) => {
       this.alldata = response;
     }
   )
}

getClass(){
this.userService.getClass().subscribe(
  (response) => {
    this.dataClass = response;
  }
)}

  dataForm(){
    this.userService.dataForm().subscribe(
      (response) => {
        this.formdata = response;
      }
    )}

    getTicket(){
      this.userService.getTicket().subscribe(
        (response) => {
          this.ticketData = response;
        }
      )
   }
}