import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  tableDetails: any;

  availability = true;
  seatCount = 2;
  constructor() { }

  ngOnInit(): void {
    console.log(this.tableDetails);
    this.availability = this.tableDetails.availability;
    this.seatCount = this.tableDetails.table.maxCountPax;

  }

}
