import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { LastArticleComponent } from './components/last-article/last-article.component';
import { OtherArticleComponent } from './components/other-article/other-article.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';
import { TheTravelComponent } from './components/the-travel/the-travel.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { ForMoreComponent } from './components/for-more/for-more.component';
import { HeadArticleComponent } from './components/head-article/head-article.component';
import { InShortComponent } from './components/in-short/in-short.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    LastArticleComponent,
    OtherArticleComponent,
    ReturnButtonComponent,
    TheTravelComponent,
    OpinionComponent,
    ForMoreComponent,
    HeadArticleComponent,
    InShortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
