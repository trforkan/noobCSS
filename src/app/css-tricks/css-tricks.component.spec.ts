import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSTricksComponent } from './css-tricks.component';

describe('CSSTricksComponent', () => {
  let component: CSSTricksComponent;
  let fixture: ComponentFixture<CSSTricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSTricksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
