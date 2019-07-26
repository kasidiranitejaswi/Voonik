import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternwearComponent } from './westernwear.component';

describe('WesternwearComponent', () => {
  let component: WesternwearComponent;
  let fixture: ComponentFixture<WesternwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
