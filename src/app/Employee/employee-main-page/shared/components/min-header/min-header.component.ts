import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-min-header',
  templateUrl: './min-header.component.html',
  styleUrls: ['./min-header.component.css'],
})
export class MinHeaderComponent implements OnInit {
  @Output() menuStatus: EventEmitter<any> = new EventEmitter();
  status = true;
  constructor() {}

  ngOnInit(): void {}
  toggleSideBar() {
    this.status = !this.status;
    this.menuStatus.emit(this.status);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
