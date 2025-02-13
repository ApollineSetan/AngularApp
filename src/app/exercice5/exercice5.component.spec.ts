import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice5Component } from './exercice5.component';

describe('Exercice5Component', () => {
  let component: Exercice5Component;
  let fixture: ComponentFixture<Exercice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercice5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
