import { Component, OnInit, } from '@angular/core';

import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  regularDistribution = 200 / 10;
  movies: Movie[];
  searchText;
  
  constructor(private movieService: MovieService) { }


  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  } 
}
