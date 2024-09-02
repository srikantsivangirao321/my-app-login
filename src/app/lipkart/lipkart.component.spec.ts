import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipkartComponent } from './lipkart.component';

describe('LipkartComponent', () => {
  let component: LipkartComponent;
  let fixture: ComponentFixture<LipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipkartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
