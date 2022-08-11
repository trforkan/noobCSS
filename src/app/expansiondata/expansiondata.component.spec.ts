import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansiondataComponent } from './expansiondata.component';

describe('ExpansiondataComponent', () => {
  let component: ExpansiondataComponent;
  let fixture: ComponentFixture<ExpansiondataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansiondataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
