import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo1sousdetails2Component } from './exo1sousdetails2.component';

describe('Exo1sousdetails2Component', () => {
  let component: Exo1sousdetails2Component;
  let fixture: ComponentFixture<Exo1sousdetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo1sousdetails2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo1sousdetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
