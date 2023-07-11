import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Article } from 'src/app/mocks/mock';
import { CatalogPageService } from 'src/app/services/catalog-page.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  // Je récupère l'article de mon mock
  article?: Article;


  // J'importe dans mon constructeur mon service ainsi que le activatedRoute qui me permet de récupérer l'id de mon article pour la route
  constructor(
    private catalogService: CatalogPageService,
    private ativatedRoute: ActivatedRoute,
  ) {}

  // j'initialise ma fonction pour la bonne récupération des éléments par id au lancement de la page article/:id
  ngOnInit() {
    this.initArticle()
  }


  initArticle() {
    // Je récupère l'ID de mon article
    const id = Number(this.ativatedRoute.snapshot.paramMap.get('id'));

    // J'appelle mon service pour récupérer mon article
    const foundArticle = this.catalogService.getArticle(id)

    // Si je récupère l''article alors je le rentre dans la variables article pour pouvoir l'afficher dans le HTML
    if(foundArticle) {
      this.article = foundArticle;
      console.log(this.article)
    } else {
      console.log('pas trouvé')
    }
  }
}
