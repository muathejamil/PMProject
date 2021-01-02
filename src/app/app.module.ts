import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar2Component } from './WelcomePage/nav-bar2/nav-bar2.component';
import { SliderPartComponent } from './WelcomePage/slider-part/slider-part.component';
import { Featres2Component } from './WelcomePage/featres2/featres2.component';
import { PortfolioComponent } from './WelcomePage/portfolio/portfolio.component';
import { PricingComponent } from './WelcomePage/pricing/pricing.component';
import { AboutComponent } from './WelcomePage/about/about.component';
import { TestimonialComponent } from './WelcomePage/testimonial/testimonial.component';
import { TeamIntroComponent } from './WelcomePage/team-intro/team-intro.component';
import { ContactComponent } from './WelcomePage/contact/contact.component';
import { FooterComponent } from './WelcomePage/footer/footer.component';
import { LoginComponent } from './WelcomePage/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainPageCompanyComponent } from './Company/main-page-company/main-page-company.component';
import { CompanyEmployeeComponent } from './Company/company-employee/company-employee.component';
import { CompanyFreelancerComponent } from './Company/company-freelancer/company-freelancer.component';
import { CompanyProjectsComponent } from './Company/company-projects/company-projects.component';
import { CompanyTeamsComponent } from './Company/company-teams/company-teams.component';
import { CompanyHeaderComponent } from './Company/company-header/company-header.component';

import { EmployeeListComponent } from './Company/company-employee/employee-list/employee-list.component';

import { EmployeeComponent } from './Company/company-employee/employee/employee.component';
import { EmployeeService } from './shared/employee.service';

import { ToastrModule } from 'ngx-toastr';
import { CompanyPublicComponent } from './Company/company-public/company-public.component';
import { DashboardComponent } from './Company/main-page-company/dashboard/dashboard.component';

import { PostsComponent } from './Company/main-page-company/posts/posts.component';
import { DashHeaderComponent } from './Company/main-page-company/shared/components/dash-header/dash-header.component';
import { DashFooterComponent } from './Company/main-page-company/shared/components/dash-footer/dash-footer.component';
import { DashSideBarComponent } from './Company/main-page-company/shared/components/dash-side-bar/dash-side-bar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { AreaComponent } from './Company/main-page-company/shared/widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './Company/main-page-company/shared/widgets/card/card.component';
import { PieComponent } from './Company/main-page-company/shared/widgets/pie/pie.component';
import { DashboardService } from './Company/main-page-company/dashboard.service';
import { TableComponent } from './Company/main-page-company/shared/widgets/table/table.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProjectComponent } from './Company/company-projects/project/project.component';

import { ProjectTaskComponent } from './Company/company-projects/project-task/project-task.component';
import { ProjectService } from './Company/company-projects/shared/project.service';

import { MatDialogModule } from '@angular/material/dialog';
import { ProjectsListComponent } from './Company/company-projects/projects-list/projects-list.component';
import { TeamComponent } from './Company/company-teams/team/team.component';
import { TeamEmployeeComponent } from './Company/company-teams/team-employee/team-employee.component';
import { TeamListComponent } from './Company/company-teams/team-list/team-list.component';
import { TeamService } from './Company/company-teams/shared/team.service';
import { WelcomePageComponent } from './WelcomePage/welcome-page/welcome-page.component';
import { EmployeeMainPageComponent } from './Employee/employee-main-page/employee-main-page.component';
import { EmployeeHeaderComponent } from './Employee/employee-header/employee-header.component';
import { FreelancerHeaderComponent } from './Freelancer/freelancer-header/freelancer-header.component';
import { FreelancerMainPageComponent } from './Freelancer/freelancer-main-page/freelancer-main-page.component';
import { EmployeeTaskComponent } from './Employee/employee-task/employee-task.component';
import { EmployeeTeamComponent } from './Employee/employee-team/employee-team.component';
import { EmployeeDashBoardComponent } from './Employee/employee-main-page/employee-dash-board/employee-dash-board.component';
import { EmployeeComponentsComponent } from './Employee/employee-main-page/shared/employee-components/employee-components.component';
import { EmployeeWidgetsComponent } from './Employee/employee-main-page/shared/employee-widgets/employee-widgets.component';
import { MinHeaderComponent } from './Employee/employee-main-page/shared/components/min-header/min-header.component';
import { MinFooterComponent } from './Employee/employee-main-page/shared/components/min-footer/min-footer.component';
import { MinSideNavComponent } from './Employee/employee-main-page/shared/components/min-side-nav/min-side-nav.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FreelancerTaskComponent } from './Freelancer/freelancer-task/freelancer-task.component';
import { FreelancerTeamComponent } from './Freelancer/freelancer-team/freelancer-team.component';
import { FreelancerDashBoardComponent } from './Freelancer/freelancer-main-page/freelancer-dash-board/freelancer-dash-board.component';
import { FreelancerFooterComponent } from './Freelancer/freelancer-main-page/shared/components/freelancer-footer/freelancer-footer.component';
import { FreelancerSideNavComponent } from './Freelancer/freelancer-main-page/shared/components/freelancer-side-nav/freelancer-side-nav.component';
import { FreelancerMinHeaderComponent } from './Freelancer/freelancer-main-page/shared/components/freelancer-min-header/freelancer-min-header.component';
import { ShowJobComponent } from './public/show-job/show-job.component';
import { AddJobComponent } from './public/add-job/add-job.component';
import { CreatCompanyComponent } from './Company/creat_company/CreatCompany.component';
import { SeeOfferscomponent } from './Company/company-freelancer/SEE_OFFERS/seeOffers.component';
import { ProjectUpdateComponent } from './Company/company-update_projects/project/projectupdate.component';
import { ProjectUpdateTaskComponent } from './Company/company-update_projects/project-task/project-Updatetask.component';
import { EditTeamComponent } from './Company/company-teams/edit-team/edit-team.component';
import { edittask } from './Employee/employee-task/edit/edittask.component';
import { SeeReportscomponent } from './Company/company-projects/seereports/SeeReports.component';
import { GanttModule, ResizeService, SortService, FilterService, SelectionService, ReorderService,
  EditService, DayMarkersService, ToolbarService } from '@syncfusion/ej2-angular-gantt';

@NgModule({
  declarations: [
    AppComponent,
    NavBar2Component,
    SliderPartComponent,
    Featres2Component,
    PortfolioComponent,
    PricingComponent,
    AboutComponent,
    TestimonialComponent,
    TeamIntroComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    MainPageCompanyComponent,
    CompanyEmployeeComponent,
    CompanyFreelancerComponent,
    CompanyProjectsComponent,
    CompanyTeamsComponent,
    CompanyHeaderComponent,
    EmployeeListComponent,
    EmployeeComponent,
    CompanyPublicComponent,
    DashboardComponent,
    PostsComponent,
    DashHeaderComponent,
    DashFooterComponent,
    DashSideBarComponent,
    AreaComponent,
    ProjectUpdateTaskComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    ProjectComponent,
    ProjectTaskComponent,
    ProjectsListComponent,
    TeamComponent,
    TeamEmployeeComponent,
    TeamListComponent,
    WelcomePageComponent,
    EmployeeMainPageComponent,
    EmployeeHeaderComponent,
    FreelancerHeaderComponent,
    FreelancerMainPageComponent,
    EmployeeTaskComponent,
    EmployeeTeamComponent,
    EmployeeDashBoardComponent,
    EmployeeComponentsComponent,
    EmployeeWidgetsComponent,
    MinHeaderComponent,
    MinFooterComponent,
    MinSideNavComponent,
    FreelancerTaskComponent,
    FreelancerTeamComponent,
    FreelancerDashBoardComponent,
    FreelancerFooterComponent,
    FreelancerSideNavComponent,
    FreelancerMinHeaderComponent,
    ShowJobComponent,
    AddJobComponent,
    CreatCompanyComponent,
    SeeOfferscomponent,
    ProjectUpdateComponent,
    EditTeamComponent,
    edittask,
    SeeReportscomponent,
    AreaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    GanttModule,

  ],
  entryComponents: [ProjectTaskComponent, TeamEmployeeComponent],
  exports: [
    MainPageCompanyComponent,
    CompanyHeaderComponent,
    TeamListComponent,
    AddJobComponent,
    EditTeamComponent,


  ],
  providers: [
    EmployeeService,
    DashboardService,
    ProjectService,
    EmployeeService,
    TeamService,
    ResizeService,
    SortService,
    FilterService,
    SelectionService,
    ReorderService,
    EditService,
    DayMarkersService,
    ToolbarService

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
