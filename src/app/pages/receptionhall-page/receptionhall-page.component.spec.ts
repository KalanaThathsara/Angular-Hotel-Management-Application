import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionhallPageComponent } from './receptionhall-page.component';

describe('ReceptionhallPageComponent', () => {
  let component: ReceptionhallPageComponent;
  let fixture: ComponentFixture<ReceptionhallPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionhallPageComponent]
    });
    fixture = TestBed.createComponent(ReceptionhallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
