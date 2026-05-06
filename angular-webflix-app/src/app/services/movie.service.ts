import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../assets/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = environment.omdbApiKey;
  apiUrl = environment.omdbApiUrl;

  constructor(private http: HttpClient) { }

  getMovies(search: string) {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${search}`)
  }
}