import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

export class AuthGuard implements CanActivate  {
  canActivate(): boolean {
    if(true){
      return true;

    }else{
      return false;
    }
  }

};
