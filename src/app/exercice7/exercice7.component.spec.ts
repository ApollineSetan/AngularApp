import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice7Component } from './exercice7.component';

describe('Exercice7Component', () => {
  let component: Exercice7Component;
  let fixture: ComponentFixture<Exercice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercice7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
