import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringReportComponent } from './recurring-report.component';

describe('RecurringReportComponent', () => {
  let component: RecurringReportComponent;
  let fixture: ComponentFixture<RecurringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecurringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
