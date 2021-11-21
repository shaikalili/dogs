import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apointment } from '../Apointment.model';
import { ApointmentsService } from '../apointment.service';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-my-apointment',
  templateUrl: './my-apointment.component.html',
  styleUrls: ['./my-apointment.component.css']
})
export class MyApointmentComponent implements OnInit {
  apointments:Apointment[];

  Change=false;
  constructor(private apointmentService:ApointmentsService, public dialog:MatDialog) { }

  ngOnInit(): void {
    const user=localStorage.getItem("user");
    this.apointmentService.getMyApointments(user).subscribe(el=>this.apointments=el);
  }

  onDelete(id:number){
   this.apointmentService.deleteApointment(id).subscribe();
  }
  onChange(apointment:Apointment){
   this.dialog.open(CalendarComponent, {
    data: {
    Apointment:apointment
   }});
  }

}
