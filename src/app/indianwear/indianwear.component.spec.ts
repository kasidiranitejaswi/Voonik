import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianwearComponent } from './indianwear.component';

describe('IndianwearComponent', () => {
  let component: IndianwearComponent;
  let fixture: ComponentFixture<IndianwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
