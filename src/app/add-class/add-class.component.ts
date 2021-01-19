import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  createClass(data){
    this.userService.createClass(data);
}




}
