import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http:HttpClient) { }

  Createsingnup(user:any){
    return this.http.post<any>('http://localhost:5197/api/UserLogins/register',user)

  }
  singnin(user:any){
    return this.http.post<any>('http://localhost:5197/api/UserLogins/login',user)
  }
}