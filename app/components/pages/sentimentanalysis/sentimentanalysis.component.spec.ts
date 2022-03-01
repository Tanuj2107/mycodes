import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentanalysisComponent } from './sentimentanalysis.component';

describe('SentimentanalysisComponent', () => {
  let fixture: ComponentFixture<SentimentanalysisComponent>;
  let component: SentimentanalysisComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
