import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageDonneesComponent } from './affichage-donnees.component';

describe('AffichageDonneesComponent', () => {
  let component: AffichageDonneesComponent;
  let fixture: ComponentFixture<AffichageDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageDonneesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
