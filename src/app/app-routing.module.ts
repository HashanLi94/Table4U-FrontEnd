import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservationManagementComponent} from './reservation-management/reservation-management.component';



const routes: Routes = [
  // Main redirect
  { path: 'reservation', component: ReservationManagementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot(routes: any) {
    throw new Error("Method not implemented.");
  }
}
