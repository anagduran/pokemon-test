import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private _router: Router
  ) { }


  canActivate(): boolean {
    var active;
    let token = localStorage.getItem('tokenBoolean');
   
    if(token) active=true;
    else {
      this._router.navigate(['/']);
      active=false;
    }
    return active;
  }
}
