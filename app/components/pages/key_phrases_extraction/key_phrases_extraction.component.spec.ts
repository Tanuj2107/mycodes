import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPhrasesExtractionComponent } from './key_phrases_extraction.component';

describe('KeyPhrasesExtractionComponent', () => {
  let component: KeyPhrasesExtractionComponent;
  let fixture: ComponentFixture<KeyPhrasesExtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPhrasesExtractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPhrasesExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
