import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Onefriend4Component } from './onefriend4.component';

describe('Onefriend4Component', () => {
  let component: Onefriend4Component;
  let fixture: ComponentFixture<Onefriend4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onefriend4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onefriend4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
