import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsClassificationComponent } from './news_classification.component';

describe('NewsClassificationComponent', () => {
  let component: NewsClassificationComponent;
  let fixture: ComponentFixture<NewsClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
