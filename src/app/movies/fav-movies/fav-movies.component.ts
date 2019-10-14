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

  ngOnChanges() {
    this.getFavorites();
  }

  ngOnInit() {
    this.getMovies();
    this.getFavorites();
    
  }
  ngDoCheck(){
    this.getFavorites();
  }

  getMovies(): void{
    this.movieService.getMovies()
        .subscribe(movies => this.movies = movies);
  }

  getFavorites(){
    this.filteredMovies = this.movies.filter(x => (x.favorite === true));
    return this.filteredMovies;
  }

  
}