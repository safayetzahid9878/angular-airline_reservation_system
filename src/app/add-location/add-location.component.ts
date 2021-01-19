import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  
  allData;
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    
  }

  createClass(data){
      this.userService.createClass(data);
  }
    

}
