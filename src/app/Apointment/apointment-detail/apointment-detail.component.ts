import { Apointment } from '../Apointment.model';
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-apointment-detail',
  templateUrl: './apointment-detail.component.html',
  styleUrls: ['./apointment-detail.component.css']
})
export class ApointmentDetailComponent implements OnInit {
apointment:Apointment;
constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  this.apointment=this.data.Apointment;
  }

}
