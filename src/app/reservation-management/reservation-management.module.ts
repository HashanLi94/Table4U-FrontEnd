import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationManagementComponent } from './reservation-management.component';
import {ReservationManagementService} from './service/reservation-management.service';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [ReservationManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,


  ],
  exports: [ReservationManagementComponent]
})
export class ReservationManagementModule { }
