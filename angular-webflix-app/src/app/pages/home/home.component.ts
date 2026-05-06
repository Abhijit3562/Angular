import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MovieRowComponent } from '../../components/movie-row/movie-row.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MovieRowComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  movies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies('wonder woman')
    .subscribe((res: any) => {
      this.movies = res.search;
    })
  }
}
