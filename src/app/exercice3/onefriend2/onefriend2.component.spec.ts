import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onefriend2Component } from './onefriend2.component';

describe('Onefriend2Component', () => {
  let component: Onefriend2Component;
  let fixture: ComponentFixture<Onefriend2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onefriend2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onefriend2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
