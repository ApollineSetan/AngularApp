import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo1details2Component } from './exo1details2.component';

describe('Exo1details2Component', () => {
  let component: Exo1details2Component;
  let fixture: ComponentFixture<Exo1details2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo1details2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo1details2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
