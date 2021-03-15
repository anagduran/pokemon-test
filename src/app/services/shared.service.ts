import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private _router: Router
   
  ) { }

 
  public detectMob() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    
    return isMobile
  }

  public login(params){

    let responseBoolean = false;

    if(params.email === 'prueba@prueba.com' && params.password==='12345678'){
      responseBoolean = true;
      localStorage.setItem('tokenBoolean', JSON.stringify(responseBoolean))
    }

    return responseBoolean

  }

  public logout(){

    console.log("aqui")

    localStorage.clear();
    this._router.navigate(['/']);
    
  }



}
