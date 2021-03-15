
import { MaterialModuleModule } from '../../material-module/MaterialModuleModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WelcomeModule { }
