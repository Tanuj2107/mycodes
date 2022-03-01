import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentAnalysisComponent } from './patent_analysis.component';

describe('PatentAnalysisComponent', () => {
  let component: PatentAnalysisComponent;
  let fixture: ComponentFixture<PatentAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
