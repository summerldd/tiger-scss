import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClockComponent } from './home-clock.component';

describe('HomeClockComponent', () => {
  let component: HomeClockComponent;
  let fixture: ComponentFixture<HomeClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
