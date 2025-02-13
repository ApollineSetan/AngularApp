import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onefriend5Component } from './onefriend5.component';

describe('Onefriend5Component', () => {
  let component: Onefriend5Component;
  let fixture: ComponentFixture<Onefriend5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onefriend5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onefriend5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
