import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelivingComponent } from './homeliving.component';

describe('HomelivingComponent', () => {
  let component: HomelivingComponent;
  let fixture: ComponentFixture<HomelivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
