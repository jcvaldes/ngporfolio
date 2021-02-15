import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeassonJobsComponent } from './seasson-jobs.component';

describe('SeassonJobsComponent', () => {
  let component: SeassonJobsComponent;
  let fixture: ComponentFixture<SeassonJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeassonJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeassonJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
