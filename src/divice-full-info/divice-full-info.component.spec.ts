import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiviceFullInfoComponent } from './divice-full-info.component';

describe('DeviceFullInfoComponent', () => {
  let component: DiviceFullInfoComponent;
  let fixture: ComponentFixture<DiviceFullInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiviceFullInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiviceFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
