import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-planedetails',
  templateUrl: './planedetails.component.html',
  styleUrls: ['./planedetails.component.css']
})
export class PlanedetailsComponent implements OnInit {

  allData;
  massege;
  title = 'app';
  
  planeObj = {
  name : '',
  mobile : '',
  email : '',
  password : ''
}

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.getData();

  }

  planeSub(data){
    this.userService.planeSub(data);
    this.massege="Data Added Successfully";
    
  }

  getData(){
    this.userService.getPlane().subscribe((response) => {
      this.allData = response;
    })
  }
  
  deletePlane(data){
    this.userService.deletePlane(data).subscribe(()=> {
      this.getData();
    })
  }
  
  editPlane(user){
    this.planeObj = user;
  }
  
  updatePlane(){
    this.userService.updatePlane(this.planeObj).subscribe(()=>{
      this.getData();
    })
  }

}
