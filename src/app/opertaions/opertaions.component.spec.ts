import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertaionsComponent } from './opertaions.component';

describe('OpertaionsComponent', () => {
  let component: OpertaionsComponent;
  let fixture: ComponentFixture<OpertaionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertaionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpertaionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
