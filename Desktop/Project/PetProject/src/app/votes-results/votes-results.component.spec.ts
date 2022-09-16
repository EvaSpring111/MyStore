import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesResultsComponent } from './votes-results.component';

describe('VotesResultsComponent', () => {
  let component: VotesResultsComponent;
  let fixture: ComponentFixture<VotesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotesResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
