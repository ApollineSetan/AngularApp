import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo1details3Component } from './exo1details3.component';

describe('Exo1details3Component', () => {
  let component: Exo1details3Component;
  let fixture: ComponentFixture<Exo1details3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo1details3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo1details3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
