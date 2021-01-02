import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'SEEReport',
  templateUrl: './SeeReports.component.html',
  styleUrls: ['./SeeReports.component.css'],
})
export class SeeReportscomponent implements OnInit {

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<SeeReportscomponent>,

  ) {}

  ngOnInit(): void {
console.log(this.data)

  }
}
