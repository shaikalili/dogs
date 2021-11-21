import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApointmentsService } from '../Apointment/apointment.service';
import { UserService } from '../user/User.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router,private apointmentService:ApointmentsService, private userService:UserService) { }

  ngOnInit(): void {
  }

  onLogOut(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    this.router.navigate(['user']);
  }
  myApointments(){
  const userId=localStorage.getItem("user");
  this.apointmentService.getMyApointments(userId);
  }

}
