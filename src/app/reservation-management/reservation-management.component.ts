import { Component, OnInit } from '@angular/core';
import {ReservationManagementService} from './service/reservation-management.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.css']
})
export class ReservationManagementComponent implements OnInit {

  availableTables: any;
  timeSlots =[
    '20:00:00',
    '20:15:00',
    '20:30:00',
    '20:45:00'
  ];
  searchForm =  new FormGroup({
    paxCount: new FormControl(),
    date: new FormControl(),
    timeSlot : new FormControl()
  });

  constructor(private reservationManagementService: ReservationManagementService) {
  }

  ngOnInit(): void {

console.log(this.timeSlots);
    try {
      console.log("tessese");
      const promise = this.reservationManagementService.getAvailableTables('2019-02-14', '20:30:00');

      promise.then(response => {

        this.availableTables = response;
        console.log(this.availableTables);
        },
        error => {
              console.log(error);
        });
    } catch (exception) {

      console.log(exception.message);

    }
  }

  searchAvailability(formValue: any) {
    console.log(formValue);
  }

}
