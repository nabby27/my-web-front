import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIconsComponent } from './link-icons.component';

describe('LinkIconsComponent', () => {
  let component: LinkIconsComponent;
  let fixture: ComponentFixture<LinkIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkIconsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
