import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationManagementService {

  constructor(private http: HttpClient) {
  }

  getAvailableTables(date: string, timeSlot: string) {
    let url = `/api/booking/getAvailableTables?sDate=${date}&timeSlot=${timeSlot}`;
    console.log(url);
    return new Promise((resolve, reject) =>
      this.http.get(url)
        .subscribe(
          response => {
            console.log("test");
            resolve(response);
          },
          error => {
            console.log(error);
            reject(error);
          }
        )
    );
  }
}
