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
    console.log("aui")
  }

  logout(){
    console.log("aqui")
    this.sharedS.logout()
  }

}
