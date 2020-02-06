import { TestBed } from '@angular/core/testing';

import { RickAndMortyService } from './rickandmorty.service';

describe('DataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickAndMortyService = TestBed.get(RickAndMortyService);
    expect(service).toBeTruthy();
  });
});
