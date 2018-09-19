import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadComponent } from './home-head.component';

describe('HomeHeadComponent', () => {
  let component: HomeHeadComponent;
  let fixture: ComponentFixture<HomeHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
