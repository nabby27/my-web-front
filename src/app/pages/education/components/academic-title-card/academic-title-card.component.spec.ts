import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicTitleCardComponent } from './academic-title-card.component';

describe('AcademicTitleComponent', () => {
  let component: AcademicTitleCardComponent;
  let fixture: ComponentFixture<AcademicTitleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicTitleCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
