import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleElementComponentComponent } from './article-element-component.component';

describe('ArticleElementComponentComponent', () => {
  let component: ArticleElementComponentComponent;
  let fixture: ComponentFixture<ArticleElementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleElementComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleElementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
