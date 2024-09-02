import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindngComponent } from './data-bindng.component';

describe('DataBindngComponent', () => {
  let component: DataBindngComponent;
  let fixture: ComponentFixture<DataBindngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
