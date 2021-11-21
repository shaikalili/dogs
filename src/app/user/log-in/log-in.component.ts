import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User.Model';
import { UserService } from '../User.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 user:User
 invalidLogin:boolean;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  } 

  onSubmit(f){
    if(f.valid){
     this.user=new User();
     this.user.Email=f.value.email;
     this.user.Password=f.value.password; 
     this.userService.logIn(this.user).subscribe(response=>
    {
      const token= (<any>response).token.token;
      localStorage.setItem("jwt",token);
      this.invalidLogin=false;
      localStorage.setItem("user",(<any>response).user.id);
      //this.userService.currentUser.next((<any>response).user);
      this.router.navigate(['apointment-list']);
    }
      ,err=>(this.invalidLogin=true));
    }
    else{
      console.log("not valid");
    }
  }
}
