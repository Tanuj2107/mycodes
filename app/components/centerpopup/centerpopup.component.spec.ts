import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterpopupComponent } from './centerpopup.component';

describe('CenterpopupComponent', () => {
  let component: CenterpopupComponent;
  let fixture: ComponentFixture<CenterpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
