import { Component } from '@angular/core';
import { Article } from 'src/app/mocks/mock';
import { CatalogPageService } from 'src/app/services/catalog-page.service';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {
  articles: Article[] = [];

  constructor(private catalogService: CatalogPageService) {}

  ngOnInit() {
    this.articles = this.catalogService.getArticles()
  }

}
