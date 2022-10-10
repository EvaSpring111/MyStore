import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAdvertisementComponent } from './banner-advertisement.component';

describe('BannerAdvertisementComponent', () => {
  let component: BannerAdvertisementComponent;
  let fixture: ComponentFixture<BannerAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAdvertisementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
