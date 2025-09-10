import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blacksquare } from './black-square';

describe('Blacksquare', () => {
  let component: Blacksquare;
  let fixture: ComponentFixture<Blacksquare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blacksquare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blacksquare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
