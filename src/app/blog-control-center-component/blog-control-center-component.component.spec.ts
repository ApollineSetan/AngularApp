import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogControlCenterComponentComponent } from './blog-control-center-component.component';

describe('BlogControlCenterComponentComponent', () => {
  let component: BlogControlCenterComponentComponent;
  let fixture: ComponentFixture<BlogControlCenterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogControlCenterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogControlCenterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
