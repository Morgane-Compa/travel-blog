import { Component } from '@angular/core';
import { Article } from 'src/app/mocks/mock';
import { CatalogPageService } from 'src/app/services/catalog-page.service';

@Component({
  selector: 'app-head-article',
  templateUrl: './head-article.component.html',
  styleUrls: ['./head-article.component.css']
})
export class HeadArticleComponent {
  articles: Article[] = [];

  constructor(private catalogService: CatalogPageService) {}

  ngOnInit() {
    this.articles = this.catalogService.getArticles()
  }

}
