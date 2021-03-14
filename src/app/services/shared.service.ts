import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
   
  ) { }

 
  public detectMob() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    
    return isMobile
  }



}
