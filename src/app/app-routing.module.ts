import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageCompanyComponent } from './Company/main-page-company/main-page-company.component';
import { CompanyEmployeeComponent } from './Company/company-employee/company-employee.component';
import { CompanyFreelancerComponent } from './Company/company-freelancer/company-freelancer.component';
import { CompanyProjectsComponent } from './Company/company-projects/company-projects.component';
import { CompanyTeamsComponent } from './Company/company-teams/company-teams.component';
import { CompanyPublicComponent } from './Company/company-public/company-public.component';
import { DashboardComponent } from './Company/main-page-company/dashboard/dashboard.component';
import { PostsComponent } from './Company/main-page-company/posts/posts.component';
import { ProjectComponent } from './Company/company-projects/project/project.component';
import { ProjectsListComponent } from './Company/company-projects/projects-list/projects-list.component';
import { TeamComponent } from './Company/company-teams/team/team.component';
import { TeamListComponent } from './Company/company-teams/team-list/team-list.component';
import { EmployeeMainPageComponent } from './Employee/employee-main-page/employee-main-page.component';
import { EmployeeTaskComponent } from './Employee/employee-task/employee-task.component';
import { EmployeeTeamComponent } from './Employee/employee-team/employee-team.component';
import { CompanyHeaderComponent } from './Company/company-header/company-header.component';
import { WelcomePageComponent } from './WelcomePage/welcome-page/welcome-page.component';
import { EmployeeHeaderComponent } from './Employee/employee-header/employee-header.component';
import { FreelancerHeaderComponent } from './Freelancer/freelancer-header/freelancer-header.component';
import { FreelancerMainPageComponent } from './Freelancer/freelancer-main-page/freelancer-main-page.component';
import { FreelancerTaskComponent } from './Freelancer/freelancer-task/freelancer-task.component';
import { FreelancerTeamComponent } from './Freelancer/freelancer-team/freelancer-team.component';
import { FreelancerDashBoardComponent } from './Freelancer/freelancer-main-page/freelancer-dash-board/freelancer-dash-board.component';
import { AddJobComponent } from './public/add-job/add-job.component';
import { ShowJobComponent } from './public/show-job/show-job.component';
import { CreatCompanyComponent } from './Company/creat_company/CreatCompany.component';
import { SeeOfferscomponent } from './Company/company-freelancer/SEE_OFFERS/seeOffers.component';
import { ProjectUpdateComponent } from './Company/company-update_projects/project/projectupdate.component';
import { EditTeamComponent } from './Company/company-teams/edit-team/edit-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'WelcomePage', pathMatch: 'full' },
  {
    path: 'WelcomePage',
    component: WelcomePageComponent,
    // children: [
    //   { path: 'landing', component: SliderPartComponent },
    //   { path: 'services', component: Featres2Component },
    //   { path: 'joinus', component: LoginComponent },
    //   { path: 'pricing', component: PricingComponent },
    //   { path: 'about', component: AboutComponent },
    //   { path: 'teamIntro', component: TeamIntroComponent },
    //   { path: 'contact', component: ContactComponent },
    // ],


  },
  {
    path: 'companyHeader',
    component: CompanyHeaderComponent,
    children: [
      {
        path: 'HOME',
        component: MainPageCompanyComponent,
        children: [
          { path: 'dash', component: DashboardComponent },
          { path: 'posts', component: PostsComponent},
          {path:'addJob', component:AddJobComponent},


        ]
      },
      { path: 'CreatCompany', component: CreatCompanyComponent  },

      { path: 'EMPLOYEES', component: CompanyEmployeeComponent },

      { path: 'FREELANCERS', component: CompanyFreelancerComponent },
        {path:'SeeOffer',component:SeeOfferscomponent},

      {
        path: 'PROJECTS',
        component: CompanyProjectsComponent,
        children: [
          { path: '', component: ProjectComponent },
          { path: 'projectList', component: ProjectsListComponent },
           {path:'Update',component:ProjectUpdateComponent}
          //{ path: 'edit/:id', component: ProjectComponent },
          //{ path: 'project', component: ProjectComponent },
          //{ path: 'projectList', component: ProjectsListComponent },
        ],

      },


      {
        path: 'TEAMS',

        component: CompanyTeamsComponent,

        children: [
          { path: '', component: TeamComponent },
          { path: 'teamList', component: TeamListComponent },
          { path: 'editTeam/:id', component: EditTeamComponent },

        ],
      },
    ],
  },
  {
    path: 'EMPHeader',
    component: EmployeeHeaderComponent,
    children: [
      { path: '', component: EmployeeMainPageComponent },
      { path: 'EmployeeHomePage', component: EmployeeMainPageComponent },
      { path: 'EmployeeTask', component: EmployeeTaskComponent },
      { path: 'EmployeeTeam', component: EmployeeTeamComponent },
    ],
  },
  // {
  //   path: 'HOME',
  //   component: MainPageCompanyComponent,
  //   children: [
  //     { path: 'dash', component: DashboardComponent },
  //     { path: 'posts', component: PostsComponent },
  //   ],
  // },
  // { path: 'EMPLOYEES', component: CompanyEmployeeComponent },
  // { path: 'FREELANCERS', component: CompanyFreelancerComponent },
  // {
  //   path: 'PROJECTS',
  //   component: CompanyProjectsComponent,
  //   children: [
  //     { path: '', component: ProjectComponent },
  //     //{ path: 'edit/:id', component: ProjectComponent },
  //     //{ path: 'project', component: ProjectComponent },
  //     //{ path: 'projectList', component: ProjectsListComponent },
  //   ],
  // },
  // { path: 'projectList', component: ProjectsListComponent },
  // {
  //   path: 'TEAMS',
  //   component: CompanyTeamsComponent,
  // },
  // {
  //   path: 'team',
  //   children: [
  //     { path: '', component: TeamComponent },
  //     { path: 'edit/:id', component: TeamComponent },
  //   ],
  // },
  // { path: 'teamList', component: TeamListComponent },
  { path: 'PUBLIC', component: CompanyPublicComponent },
  // { path: 'EmployeeHomePage', component: EmployeeMainPageComponent },
  // { path: 'EmployeeTask', component: EmployeeTaskComponent },
  // { path: 'EmployeeTeam', component: EmployeeTeamComponent },
  {
    path: 'FLHeader',
    component: FreelancerHeaderComponent,
    children: [
      { path: '', component: FreelancerMainPageComponent },
      { path: 'FLMainPage', component: FreelancerMainPageComponent },
      { path: 'FLTasks', component: FreelancerTaskComponent },
      { path: 'FLTeams', component: FreelancerTeamComponent },
        {path:'showJob',component:ShowJobComponent},
      { path: 'FLPublic', component: FreelancerDashBoardComponent },
    ],
  },
  {path:'showJob',component:ShowJobComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
