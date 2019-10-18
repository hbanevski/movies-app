import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie';
import { MovieService} from '../../movie.service';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {
  regularDistribution = 200 / 10;
  movies: Movie[];
  searchText;
  filteredMovies: Movie[];
  

  constructor(private movieService:MovieService) {
  }


  ngOnInit() {
    this.movieService.getFavs().subscribe(movies => this.filteredMovies = movies);
  
  }

 

  
}