import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onefriend3Component } from './onefriend3.component';

describe('Onefriend3Component', () => {
  let component: Onefriend3Component;
  let fixture: ComponentFixture<Onefriend3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onefriend3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onefriend3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
