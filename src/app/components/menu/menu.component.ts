import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private sharedS: SharedService
  ) { }

  ngOnInit(): void {
 
  }

  logout(){

    this.sharedS.logout()
  }

}
