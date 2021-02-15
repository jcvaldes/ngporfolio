import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLastestComponent } from './news-lastest.component';

describe('NewsLastestComponent', () => {
  let component: NewsLastestComponent;
  let fixture: ComponentFixture<NewsLastestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLastestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
