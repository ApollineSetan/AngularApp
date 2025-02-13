import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice6Component } from './exercice6.component';

describe('Exercice6Component', () => {
  let component: Exercice6Component;
  let fixture: ComponentFixture<Exercice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercice6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
