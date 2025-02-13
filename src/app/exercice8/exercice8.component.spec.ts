import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice8Component } from './exercice8.component';

describe('Exercice8Component', () => {
  let component: Exercice8Component;
  let fixture: ComponentFixture<Exercice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercice8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
