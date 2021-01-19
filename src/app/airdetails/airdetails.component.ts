import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-airdetails',
  templateUrl: './airdetails.component.html',
  styleUrls: ['./airdetails.component.css']
})
export class AirdetailsComponent implements OnInit {

  allData;

  airObj = {
    airname : '',
    airRout : '',
    model : '',
    devision : ''
}
  massege;
  title = 'app';

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.getData();
  }

  
  getData(){
    this.userService.getUser().subscribe((response) => {
      this.allData = response;
    })
  }

deleteAir(data){
  this.userService.deleteAir(data).subscribe(()=> {
    this.getData();
  })
}

editAir(user){
  this.airObj = user;
}

airUpdate(){
  this.userService.airUpdate(this.airObj).subscribe(()=>{
    this.getData();
  })
}

}
