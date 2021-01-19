import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-air',
  templateUrl: './create-air.component.html',
  styleUrls: ['./create-air.component.css']
})
export class CreateAirComponent implements OnInit {

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

  ngOnInit(): void {
    this.getData();
  }

  airSub(data){
    this.userService.airSUb(data);
    this.massege="Data Added Successfully";
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
