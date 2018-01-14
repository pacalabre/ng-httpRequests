import { TestBed, inject } from '@angular/core/testing';

import { AlbumSearchService } from './album-search.service';

describe('AlbumSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumSearchService]
    });
  });

  it('should be created', inject([AlbumSearchService], (service: AlbumSearchService) => {
    expect(service).toBeTruthy();
  }));
});
