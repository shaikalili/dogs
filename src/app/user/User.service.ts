import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./User.Model";

@Injectable({providedIn:"root"})
export class UserService{
currentUser=new BehaviorSubject<any>(null);
constructor(private http:HttpClient){

}

logIn(user:User){

    return this.http.post<User>("http://localhost:5000/api/Auth/login",user);
}

Register(user:User){

    return this.http.post<User>("http://localhost:5000/api/Auth/register",user);
}

}