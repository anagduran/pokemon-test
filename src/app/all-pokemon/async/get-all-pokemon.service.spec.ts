import { TestBed } from '@angular/core/testing';

import { GetAllPokemonService } from './get-all-pokemon.service';

describe('GetAllPokemonService', () => {
  let service: GetAllPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
