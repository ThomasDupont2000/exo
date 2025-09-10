import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redsquare } from './red-square';

describe('Redsquare', () => {
  let component: Redsquare;
  let fixture: ComponentFixture<Redsquare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Redsquare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Redsquare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
