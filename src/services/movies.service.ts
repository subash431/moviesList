import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MOVIE_API_HEADER, MOVIE_BASE_API } from '../env/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  fetchMovie() {
    return this.http.get(MOVIE_BASE_API, MOVIE_API_HEADER);
  }
}
