import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadArticleComponent } from './head-article.component';

describe('HeadArticleComponent', () => {
  let component: HeadArticleComponent;
  let fixture: ComponentFixture<HeadArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
