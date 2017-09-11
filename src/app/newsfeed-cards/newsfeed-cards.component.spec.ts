import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedCardsComponent } from './newsfeed-cards.component';

describe('NewsfeedCardsComponent', () => {
  let component: NewsfeedCardsComponent;
  let fixture: ComponentFixture<NewsfeedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
