import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommeilRecommendComponent } from './sommeil-recommend.component';

describe('SommeilRecommendComponent', () => {
  let component: SommeilRecommendComponent;
  let fixture: ComponentFixture<SommeilRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SommeilRecommendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SommeilRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
