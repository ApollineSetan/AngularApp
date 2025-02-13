import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice9Component } from './exercice9.component';

describe('Exercice9Component', () => {
  let component: Exercice9Component;
  let fixture: ComponentFixture<Exercice9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercice9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
