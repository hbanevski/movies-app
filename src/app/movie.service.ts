import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  moviesCollection: AngularFirestoreCollection<Movie>;
  movieDoc: AngularFirestoreDocument<Movie>;
  movies: Observable<Movie[]>;
  favMovies: Observable <Movie[]>
  movie: Observable<Movie>;

  constructor(private afs: AngularFirestore) {
    this.moviesCollection = this.afs.collection('movies')
   }

   getMovies(): Observable<Movie[]> {
    this.movies = this.moviesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Movie;
          data.id = action.payload.doc.id
          return data;
        });
      }))
      return this.movies;
   }

   getFavs() : Observable<Movie[]>{
    this.favMovies = this.afs.collection('movies', ref => ref.where('favorite', '==', true)).snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Movie;
          data.id = action.payload.doc.id
          return data;
        });
      }))
    return this.favMovies;
   }

   addMovies(movie:Movie){
     this.moviesCollection.add(movie);
   }

   deleteMovie(id) {
    this.afs.collection('movies').doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });

   }
}
