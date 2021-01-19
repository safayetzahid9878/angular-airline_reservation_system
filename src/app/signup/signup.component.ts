import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }
  registrationUser(data){
    this.userService.registrationUser(data);
    
  }
 
}
