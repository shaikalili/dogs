import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApointmentsListComponent } from './Apointment/apointments-list/apointments-list.component';
import { MyApointmentComponent } from './Apointment/my-apointment/my-apointment.component';
import { Auth } from './user/Auth-guard.service';
import { WelcomeUserComponent } from './user/welcome-user/welcome-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full' },
  {path:"user",component:WelcomeUserComponent},
  {path:"apointment-list",component:ApointmentsListComponent,canActivate:[Auth]},
  {path:"my-apointments",component:MyApointmentComponent,canActivate:[Auth]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
