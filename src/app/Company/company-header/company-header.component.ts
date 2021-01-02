import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../creat_company/Company.service';

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.css']
})
export class CompanyHeaderComponent implements OnInit {

  constructor(public companysevices:CompanyService) { }

  ngOnInit(): void {
  }

}
