
 import { SingupService } from "../singup.service";
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: SingupService, private router: Router) {}

  canActivate():boolean {
    if(this.authService.isLoggedIN()){
      return true;
    }else{
      this.router.navigate(['/Admin/toUser'])
      return true
    }
   

  }
}


