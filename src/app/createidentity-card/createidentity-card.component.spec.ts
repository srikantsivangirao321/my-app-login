import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateidentityCardComponent } from './createidentity-card.component';

describe('CreateidentityCardComponent', () => {
  let component: CreateidentityCardComponent;
  let fixture: ComponentFixture<CreateidentityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateidentityCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateidentityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
