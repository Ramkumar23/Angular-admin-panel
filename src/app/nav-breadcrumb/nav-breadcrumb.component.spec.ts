import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBreadcrumbComponent } from './nav-breadcrumb.component';

describe('NavBreadcrumbComponent', () => {
  let component: NavBreadcrumbComponent;
  let fixture: ComponentFixture<NavBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
