import { SharedService } from './services/shared.service';
import { Component,DoCheck  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'pokemon-test';

  
  constructor(

    private isMobile  : SharedService
  ) { }

  ngDoCheck() {
    // ...

   
   
  }
}


  

