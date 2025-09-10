import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greensquare } from './green-square';

describe('Greensquare', () => {
  let component: Greensquare;
  let fixture: ComponentFixture<Greensquare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greensquare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Greensquare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
