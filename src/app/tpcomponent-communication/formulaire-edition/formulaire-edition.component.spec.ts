import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEditionComponent } from './formulaire-edition.component';

describe('FormulaireEditionComponent', () => {
  let component: FormulaireEditionComponent;
  let fixture: ComponentFixture<FormulaireEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireEditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
