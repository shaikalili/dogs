import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Apointment } from '../Apointment.model';
import { ApointmentsService } from '../apointment.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    const day:Date = (d || new Date());
    return day >new Date();

  };
  @ViewChild('date')date:ElementRef;
  apointment:Apointment;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private apointmentService:ApointmentsService,private router:Router
  ,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.apointment=this.data.Apointment;
  }
  
  onSave(){
   let newDate=this.date.nativeElement.value;
   this.apointment.timeOfApoitmentMade=new Date();
   this.apointment.timeOfApoitment=new Date(newDate);
   this.apointmentService.UpdateApointment(this.apointment).subscribe(el=>{
   this.router.navigate(['my-apointments']);
   });
  this.dialog.closeAll();
  }
}
