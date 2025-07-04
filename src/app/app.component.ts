import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from './movie.service';
import { FrontPageSection } from './types/movie.interface';
import { TimelineComponent } from "./components/timeline/timeline.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MovieService],
})
export class AppComponent {
  movieService = inject(MovieService);
  movies = signal<FrontPageSection[]>([]);

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies) => {
      const {
        data: {
          category: { frontPage },
        },
      } = movies;
      this.movies.set(frontPage);
    });
  }
}
