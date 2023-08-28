import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayoutPageComponent } from './dayout-page.component';

describe('DayoutPageComponent', () => {
  let component: DayoutPageComponent;
  let fixture: ComponentFixture<DayoutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayoutPageComponent]
    });
    fixture = TestBed.createComponent(DayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
