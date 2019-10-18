import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers:[MovieService],
})
export class AddMovieComponent implements OnInit {


  constructor(private movieService:MovieService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit(id,name,description,director,actors,duration,imageUrl,trailerUrl) {
    let movie:Movie = {id:id,name:name,description:description,director:director,actors:actors,duration:duration,imageUrl:imageUrl,trailerUrl:trailerUrl,favorite:false}
    this.movieService.addMovies(movie);
    this.router.navigate(['/']);
  }
}
  

  

