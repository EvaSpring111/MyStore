import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDegustationComponent } from './form-degustation.component';

describe('FormDegustationComponent', () => {
  let component: FormDegustationComponent;
  let fixture: ComponentFixture<FormDegustationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDegustationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDegustationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
