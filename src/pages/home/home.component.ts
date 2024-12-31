import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  movie: any;
  constructor(private MoviesService: MoviesService) {
    this.MoviesService.fetchMovie().subscribe((data) => {
      this.movie = data;
    });
  }
}
