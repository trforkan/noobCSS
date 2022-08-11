import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CSSTricksComponent } from './css-tricks/css-tricks.component';
import { OrganizationComponent } from './organization/organization.component';
import { PhaseComponent } from './phase/phase.component';
import { DisciplineComponent } from './discipline/discipline.component';
import { RecurringReportComponent } from './recurring-report/recurring-report.component';
import { ExpansiondataComponent } from './expansiondata/expansiondata.component';

@NgModule({
  declarations: [
    AppComponent,
    CSSTricksComponent,
    OrganizationComponent,
    PhaseComponent,
    DisciplineComponent,
    RecurringReportComponent,
    ExpansiondataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
