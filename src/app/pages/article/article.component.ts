import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/mocks/mock';
import { CatalogPageService } from 'src/app/services/catalog-page.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article?: Article;
  @Input() articleInfo = this.article;

  constructor(
    private catalogService: CatalogPageService,
    private ativatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initArticle()
  }


  initArticle() {
    const id = Number(this.ativatedRoute.snapshot.paramMap.get('id'));

    const foundArticle = this.catalogService.getArticle(id)

    if(foundArticle) {
      this.article = foundArticle;
      console.log(this.article)
    } else {
      console.log('pas trouvé')
    }
  }
}
