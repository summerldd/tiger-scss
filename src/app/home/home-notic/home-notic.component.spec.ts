import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoticComponent } from './home-notic.component';

describe('HomeNoticComponent', () => {
  let component: HomeNoticComponent;
  let fixture: ComponentFixture<HomeNoticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNoticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNoticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
