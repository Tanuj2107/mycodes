import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTranslationComponent } from './machine_translation.component';

describe('MachineTranslationComponent', () => {
  let component: MachineTranslationComponent;
  let fixture: ComponentFixture<MachineTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineTranslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
