import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIComponent } from './api.component';

describe('APIComponent', () => {
  let component: APIComponent;
  let fixture: ComponentFixture<APIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
