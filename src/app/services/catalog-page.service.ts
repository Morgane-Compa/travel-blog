import { Injectable } from '@angular/core';
import { ARTICLES, Article } from '../mocks/mock';

@Injectable({
  providedIn: 'root'
})
export class CatalogPageService {

  constructor() { }

  //Retourne la liste des articles
  getArticles(): Article[] {
    return ARTICLES;
  }

  // Retourne un article via son id
  getArticle(id: number): Article | undefined {
    return ARTICLES.find(article => article.id === id);
  }
}
