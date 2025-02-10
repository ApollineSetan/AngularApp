import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice3Component } from './exercice3.component';

describe('Exercice3Component', () => {
  let component: Exercice3Component;
  let fixture: ComponentFixture<Exercice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercice3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
