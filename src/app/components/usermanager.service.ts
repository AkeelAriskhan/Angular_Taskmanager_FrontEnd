import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsermanagerService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<any[]>('http://localhost:5197/api/users')
  }
  createuser(user:any){
    return this.http.post<any>('http://localhost:5197/api/users',user)

  }
  deleteuser(id:Number){
    return this.http.delete<any[]>('http://localhost:5197/api/users/'+id)
  }
  updateuser(user:User){
    return this.http.put<any[]>('http://localhost:5197/api/users/'+user.id,user)
  }
  getuser(taskID:Number){
    return this.http.get<User>('http://localhost:5197/api/users/'+taskID);
    
  }
}
export interface User{
  id:number;
  name:string;
  email:string;
  password:string;
  phone:string;
  address?:address;
  
  
}

export interface address{
  firstLane:string;
  secondLane:string;
  city:string;
}
