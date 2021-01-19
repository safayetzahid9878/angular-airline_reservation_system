import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-root',
  templateUrl: './create-root.component.html',
  styleUrls: ['./create-root.component.css']
})
export class CreateRootComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }
  massege;
  title = 'app';

  ngOnInit() {
  }

  createRoute(data){
    this.userService.createRoute(data);
    this.massege="Data Added Successfully";
  }

}
