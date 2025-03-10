import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonListComponent } from './digimon-list.component';

describe('DigimonListComponent', () => {
  let component: DigimonListComponent;
  let fixture: ComponentFixture<DigimonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
