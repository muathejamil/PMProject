import { Component, OnInit } from '@angular/core';
import { FreeLancerService } from '../FreeLancer.service';
import { ProjectService } from 'src/app/Company/company-projects/shared/project.service';

@Component({
  selector: 'app-freelancer-team',
  templateUrl: './freelancer-team.component.html',
  styleUrls: ['./freelancer-team.component.css'],
})
export class FreelancerTeamComponent implements OnInit {
  teamres:any
  teamList = [];
  constructor(private Freeservices:FreeLancerService,private projectservices:ProjectService) {}

  ngOnInit(): void {
    console.log(this.Freeservices.FREEIdFOREmpPage)
    this.Freeservices.getTeamsList(this.Freeservices.FREEIdFOREmpPage).then((team)=>{
      this.teamres=team
      this.teamList=this.teamres.Teams




      });
  }
  onEditTeam() {
    console.log('team edites');
  }
}
