import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGenerationComponent } from './summary_generation.component';

describe('SummaryGenerationComponent', () => {
  let component: SummaryGenerationComponent;
  let fixture: ComponentFixture<SummaryGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
