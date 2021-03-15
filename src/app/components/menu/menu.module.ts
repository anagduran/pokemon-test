import { MenuComponent } from './menu.component';
import { MaterialModuleModule } from './../../material-module/MaterialModuleModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }