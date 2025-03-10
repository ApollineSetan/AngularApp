import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article-component',
  imports: [FormsModule],
  templateUrl: './add-article-component.component.html',
  styleUrl: './add-article-component.component.css'
})
export class AddArticleComponentComponent {

  title: string = '';
  content: string = '';

  @Output() articleCreated = new EventEmitter<{ title: string; content: string; author: string; date: Date; type: string }>();
  @Output() brouillonCreated = new EventEmitter<{ title: string; content: string; author: string; date: Date; type: string }>();

  onAddArticle() {
    this.articleCreated.emit({
      title: this.title,
      content: this.content,
      author: 'Auteur Automatique',
      date: new Date(),
      type: 'article'
    });
    this.resetForm();
  }

  onAddBrouillon() {
    this.brouillonCreated.emit({
      title: this.title,
      content: this.content,
      author: 'Auteur Automatique',
      date: new Date(),
      type: 'brouillon'
    });
    this.resetForm();
  }

  resetForm() {
    this.title = '';
    this.content = '';
  }
}
