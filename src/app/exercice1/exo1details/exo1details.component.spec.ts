import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo1detailsComponent } from './exo1details.component';

describe('Exo1detailsComponent', () => {
  let component: Exo1detailsComponent;
  let fixture: ComponentFixture<Exo1detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo1detailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo1detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
