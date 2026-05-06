import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-movie-row',
  standalone: true,
  imports: [MovieCardComponent, CommonModule, NgForOf],
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent {

  @Input() title: string = '';
  @Input() movies: any[] = [];

}
