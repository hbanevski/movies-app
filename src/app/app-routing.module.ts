import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FavMoviesComponent } from './movies/fav-movies/fav-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes= [
  {path:'all-movies', component: MovieListComponent},
  {path: 'favorite-movies', component: FavMoviesComponent},
  {path: '',   redirectTo: '/all-movies', pathMatch: 'full' },
  {path: 'add-movie', component: AddMovieComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
