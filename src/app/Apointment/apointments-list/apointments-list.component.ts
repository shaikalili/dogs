import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApointmentDetailComponent } from '../apointment-detail/apointment-detail.component';
import { Apointment } from '../Apointment.model';
import { ApointmentsService } from '../apointment.service';

@Component({
  selector: 'app-apointments-list',
  templateUrl: './apointments-list.component.html',
  styleUrls: ['./apointments-list.component.css']
})
export class ApointmentsListComponent implements OnInit {
  apointments:Apointment[];
  apointmentDetail:Apointment;
  constructor(private apointmentService:ApointmentsService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.apointmentService.getApointments().subscribe(apointments=>
      {this.apointments=apointments 
        for(let apointment of this.apointments){
          apointment.timeOfApoitmentMade=new Date(apointment.timeOfApoitmentMade);
        }
      });

  }
 
  selectedApointment(apointmentDetail){
   let apointment;
   this.apointmentService.getApointmentDetails(apointmentDetail.id).subscribe(el=>
    {
      apointment=el;
      this.dialog.open(ApointmentDetailComponent, {
      data: {
      Apointment:apointment
     }});
  });

  }

}

