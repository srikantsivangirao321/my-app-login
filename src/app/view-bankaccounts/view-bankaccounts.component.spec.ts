import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankaccountsComponent } from './view-bankaccounts.component';

describe('ViewBankaccountsComponent', () => {
  let component: ViewBankaccountsComponent;
  let fixture: ComponentFixture<ViewBankaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBankaccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBankaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
