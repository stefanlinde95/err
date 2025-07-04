import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighCardComponent } from './high-card.component';

describe('HighCardComponent', () => {
  let component: HighCardComponent;
  let fixture: ComponentFixture<HighCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
