import { Component, OnInit } from '@angular/core';
import { User } from '../User.Model';
import { UserService } from '../User.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:User
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(f){
    if(f.valid){
  this.user=new User();
  this.user.Name=f.value.name;
  this.user.Email=f.value.email;
  this.user.Password=f.value.password;
  this.userService.Register(this.user).subscribe(el=>
    {console.log(el)
    });
    }
    else{
      console.log("not valid");
    }
  }

}
