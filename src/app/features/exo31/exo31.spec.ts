import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo31 } from './exo31';

describe('Exo31', () => {
  let component: Exo31;
  let fixture: ComponentFixture<Exo31>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo31]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo31);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
