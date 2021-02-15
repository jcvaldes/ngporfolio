import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedEmployerComponent } from './featured-employer.component';

describe('FeaturedEmployerComponent', () => {
  let component: FeaturedEmployerComponent;
  let fixture: ComponentFixture<FeaturedEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
