import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { UserService } from "../user/User.service";
import { Apointment } from "./Apointment.model";

@Injectable({providedIn:"root"})
export class ApointmentsService{

    constructor(private http:HttpClient,private userService:UserService){}

    getApointments(){
     
     return this.http.get<any>("http://localhost:5000/api/Apointment");
    }

    getApointmentDetails(id:number){
        return this.http.get<any>("http://localhost:5000/api/Apointment/"+id);
    }

    getMyApointments(user:string){
        /*const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzY1NzIzMzIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCJ9.kYBHx0lZpS42v9EVzarIaQxT8Sq27cJUnx5XPwx3Enw"'
            })
          };*/
          const token=localStorage.getItem('jwt');
        return this.http.get<Apointment[]>("http://localhost:5000/api/Apointment/my/"+user,
        {headers:new HttpHeaders(
            {'Content-Type':  'application/json',
                'Authorization':'bearer'+token})
        });
    }

    deleteApointment(id:number){
        return this.http.delete<any>("http://localhost:5000/api/Apointment/"+id);
    }

    UpdateApointment(apointment:Apointment){
       return this.http.put("http://localhost:5000/api/Apointment",apointment);
    }
}