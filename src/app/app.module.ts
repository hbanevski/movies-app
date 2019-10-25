import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieCardComponent } from './movies/movie-list/movie-card/movie-card.component';
import { FavMoviesComponent } from './movies/fav-movies/fav-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { LengthPipe } from './movies/movie-list/shared/length.pipe';
import { TruncatePipe } from './movies/movie-list/shared/truncate.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieCardComponent,
    FavMoviesComponent,
    AddMovieComponent,
    LengthPipe,
    TruncatePipe,
    FooterComponent,
    PageNotFoundComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent],
})
export class AppModule { }
