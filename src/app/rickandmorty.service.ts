import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterFilter } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(filter?: CharacterFilter) {
    const params = {};
    if (filter) {
      Object.keys(filter).forEach(k => {
        if (filter[k]) {
          params[k] = filter[k];
        }
      });
    }

    return this.http.get(`${this.apiUrl}/character`, { params });
  }

  getNextPage(url: string) {
    return this.http.get(url);
  }
}
