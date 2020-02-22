import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header.component';



@NgModule({
  declarations: [SiteHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [SiteHeaderComponent]
})
export class SiteHeaderModule { }
