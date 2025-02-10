import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice4Component } from './exercice4.component';

describe('Exercice4Component', () => {
  let component: Exercice4Component;
  let fixture: ComponentFixture<Exercice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercice4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
