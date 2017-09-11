import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCardsComponent } from './icon-cards.component';

describe('IconCardsComponent', () => {
  let component: IconCardsComponent;
  let fixture: ComponentFixture<IconCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
