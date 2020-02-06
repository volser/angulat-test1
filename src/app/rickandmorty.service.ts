import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterFilter } from 'src/models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(filter?: CharacterFilter) {
    const params = {
      ...filter,
    }
    return this.http.get(`${this.apiUrl}/character`, { params });
  }

  getNextPage(url: string) {
    return this.http.get(url);
  }
}
