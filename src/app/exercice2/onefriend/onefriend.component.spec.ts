import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnefriendComponent } from './onefriend.component';

describe('OnefriendComponent', () => {
  let component: OnefriendComponent;
  let fixture: ComponentFixture<OnefriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnefriendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnefriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
