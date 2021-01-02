import { Component, OnInit } from '@angular/core';
import { TeamService } from './shared/team.service';
import { Team } from './shared/team.model';

@Component({
  selector: 'app-company-teams',
  templateUrl: './company-teams.component.html',
  styleUrls: ['./company-teams.component.css'],
})
export class CompanyTeamsComponent implements OnInit {
  TeamList: Team[];
  constructor(private teamService: TeamService) {}

  ngOnInit() {}
}
