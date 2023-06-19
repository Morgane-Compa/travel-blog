import { Component } from '@angular/core';
import { Article } from 'src/app/mocks/mock';
import { CatalogPageService } from 'src/app/services/catalog-page.service';

@Component({
  selector: 'app-other-article',
  templateUrl: './other-article.component.html',
  styleUrls: ['./other-article.component.css']
})
export class OtherArticleComponent {
  articles: Article[] = [];

  constructor(private catalogService: CatalogPageService) {}

  ngOnInit() {
    this.articles = this.catalogService.getArticles()
  }


}
