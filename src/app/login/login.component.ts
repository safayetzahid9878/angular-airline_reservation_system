import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  getData;
  status;

  constructor (private userService : UserService, private router : Router) { }

  ngOnInit() {
  }
  logSubmit(data){
      this.userService.logSubmit(data).subscribe((response) => {
      this.getData = response;

     for(let i=0; i <this.getData.length; i++){
        if(data.username == this.getData[i].username && data.password == this.getData[i].password){
          this.router.navigate(['/mcust'])
      }else{
          this.status="Login Failed, plese try again";
      }
      }
  })
  }

}
