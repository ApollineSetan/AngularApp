import { Component } from '@angular/core';
import { ArticleElementComponentComponent } from './article-element-component/article-element-component.component';
import { AddArticleComponentComponent } from './add-article-component/add-article-component.component';
import { NgFor, CommonModule } from '@angular/common';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-blog-control-center-component',
  imports: [ArticleElementComponentComponent, AddArticleComponentComponent, NgFor, CommonModule],
  templateUrl: './blog-control-center-component.component.html',
  styleUrl: './blog-control-center-component.component.css'
})

export class BlogControlCenterComponentComponent {

  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article'
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon'
    }
  ];

  onArticleAdded(articleData: { title: string; content: string; author: string; date: Date; type: string }) {
    const newArticle: Article = {
      id: this.articles.length + 1,
      ...articleData
    };
    this.articles.push(newArticle);
  }

  onBrouillonAdded(brouillonData: { title: string; content: string; author: string; date: Date; type: string }) {
    const newBrouillon: Article = {
      id: this.articles.length + 1,
      ...brouillonData
    };
    this.articles.push(newBrouillon);
  }
}