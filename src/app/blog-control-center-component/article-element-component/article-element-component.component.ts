import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-element-component',
  imports: [CommonModule],
  templateUrl: './article-element-component.component.html',
  styleUrl: './article-element-component.component.css'
})

export class ArticleElementComponentComponent {
  @Input() article: any;
  constructor() { }
}
