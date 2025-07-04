import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MovieApiResponse } from './types/movie.interface';
import { environment } from "../environments/environments";

@Injectable()
export class MovieService {
  http = inject(HttpClient);
  getMovies() {
    const url = environment.DATA_SOURCE_URL;

    if (!url) throw new Error("DATA_SOURCE_URL is missing!");

    return this.http.get<MovieApiResponse>(url);
  }
}
