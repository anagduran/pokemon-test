import { SharedService } from '../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(  
    private fb: FormBuilder,
    private sharedS: SharedService,
    private _router: Router,
    private toastr: ToastrService
    
    ) { }

  public loginForm: FormGroup;
  
  ngOnInit(): void {
    this.setForm();
  }

  

  setForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required,  Validators.minLength(1), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(1),  Validators.minLength(8)])],
    });
  }


  login(){

    let validation = this.sharedS.login(this.loginForm.value)

    if(validation){
      this._router.navigate(['pokemones']);
    } else {
      this.loginForm.reset();
     this.toastr.error('Las credenciales no son validas', 'Error')
    }
  }
}
