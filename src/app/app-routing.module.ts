import { RecurringReportComponent } from './recurring-report/recurring-report.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { PhaseComponent } from './phase/phase.component';
import { OrganizationComponent } from './organization/organization.component';
import { CSSTricksComponent } from './css-tricks/css-tricks.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: CSSTricksComponent , children: [
    { path: "", component: OrganizationComponent },
    { path: "organization", component: OrganizationComponent },
    { path: "phase", component: PhaseComponent },
    { path: "discipline", component: DisciplineComponent },
    { path: "recurring+report+preset", component: RecurringReportComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
