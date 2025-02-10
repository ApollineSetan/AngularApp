import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo1sousdetailsComponent } from './exo1sousdetails.component';

describe('Exo1sousdetailsComponent', () => {
  let component: Exo1sousdetailsComponent;
  let fixture: ComponentFixture<Exo1sousdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo1sousdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo1sousdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
