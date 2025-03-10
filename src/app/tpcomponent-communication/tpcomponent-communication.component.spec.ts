import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPComponentCommunicationComponent } from './tpcomponent-communication.component';

describe('TPComponentCommunicationComponent', () => {
  let component: TPComponentCommunicationComponent;
  let fixture: ComponentFixture<TPComponentCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPComponentCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TPComponentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
