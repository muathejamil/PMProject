import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css'],
})
export class DashHeaderComponent implements OnInit {
  @Output() menuStatus: EventEmitter<any> = new EventEmitter();
  status = true;
  constructor() {}

  ngOnInit() {}

  toggleSideBar() {
    this.status = !this.status;
    this.menuStatus.emit(this.status);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
