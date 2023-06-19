import { TestBed } from '@angular/core/testing';

import { CatalogPageService } from './catalog-page.service';

describe('CatalogPageService', () => {
  let service: CatalogPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
