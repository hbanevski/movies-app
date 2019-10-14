import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  MOVIES : Movie[] = [
    {
      name:'Bird Box',
      desc:'Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.',
      director:'Susanne Bier', 
      actors:'Sandra Bullock, Trevante Rhodes, John Malkovich',
      duration:124,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=MPWMBITCudM',
      favorite: false
    },
    {
      name:'Allied',
      desc:'In 1942, a Canadian intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.',
      director:'Robert Zemeckis', 
      actors:'Brad Pitt, Marion Cotillard, Jared Harris ',
      duration:124,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BZWEyMzg4ZWUtYmZhMC00Yjk2LWEyYjktODVmN2M3YTA2ZmNjXkEyXkFqcGdeQXVyNjQ2Mjg3OTI@._V1_SY1000_CR0,0,641,1000_AL_.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=Jlp94-C31cY&t=2s',
      favorite: false
    },
    {
      name: 'Aladdin',
      desc: 'A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.',
      director: 'Guy Ritchie',
      actors:'Will Smith, Mena Massoud, Naomi Scott',
      duration: 128,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=foyufD52aog',
      favorite: false
    },
    {
      name: 'The Grand Budapest Hotel',
      desc: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
      director: 'Wes Anderson',
      actors:'Ralph Fiennes, F. Murray Abraham, Mathieu Amalric',
      duration: 99,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk',
      favorite: false
    },
    {
      name:'Birdman',
      desc:'A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.',
      director:'Alejandro G. Iñárritu', 
      actors:'Michael Keaton, Zach Galifianakis, Edward Norton',
      duration:119,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=uJfLoE6hanc',
      favorite: false
    },
    {
      name:'Black Swan',
      desc:'A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky\'s "Swan Lake".',
      director:'Darren Aronofsky', 
      actors:'Natalie Portman, Mila Kunis, Vincent Cassel',
      duration:100,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=5jaI1XOB-bs',
      favorite: false
    },
    {
      name:'Les Misérables',
      desc:'In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker\'s daughter. The decision changes their lives forever.',
      director:'Tom Hooper', 
      actors:'Hugh Jackman, Russell Crowe, Anne Hathaway',
      duration:150,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=YmvHzCLP6ug',
      favorite: false
    },
    {
      name:'Mad Max: Fury Road',
      desc:'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
      director:'George Miller', 
      actors:' Tom Hardy, Charlize Theron, Nicholas Hoult',
      duration:120,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=hEJnMQG9ev8',
      favorite: false
    },
    {
      name:'Once Upon A Time In Hollywood',
      desc:'A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood\'s Golden Age in 1969 Los Angeles.',
      director:'Quentin Tarantino', 
      actors:' Leonardo DiCaprio, Brad Pitt, Margot Robbie',
      duration:161,
      imageUrl:'https://media.services.cinergy.ch/media/box1600/a3378998b6e42c1f2712229459b1ac78b4a24776.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=ELeMaP8EPAA',
      favorite: false
    },
    {
      name:'Joker',
      desc:'A gritty character study of Arthur Fleck, a man disregarded by society.',
      director:'Todd Phillips', 
      actors:'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
      duration:122,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=zAGVQLHvwOY',
      favorite: false
    },
    {
      name:'Atomic Blonde',
      desc:'An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.',
      director:'David Leitch', 
      actors:'Charlize Theron, James McAvoy, John Goodman',
      duration:115,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BMjM5NDYzMzg5N15BMl5BanBnXkFtZTgwOTM2NDU1MjI@._V1_SY1000_CR0,0,631,1000_AL_.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=yIUube1pSC0',
      favorite: false
    },
    {
      name:'Red Sparrow',
      desc:'Ballerina Dominika Egorova is recruited to \'Sparrow School,\' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.',
      director:'Francis Lawrence', 
      actors:'Jennifer Lawrence, Joel Edgerton, Matthias Schoenaerts',
      duration:142,
      imageUrl:'https://m.media-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      trailerUrl:'https://www.youtube.com/watch?v=PmUL6wMpMWw',
      favorite: false
    },
    
  ];

  constructor(private Http: HttpClient) { }


  getMovies(): Observable<any> {   
    return of (this.MOVIES);
  }

  addMovie(movie:Movie) {
  }

  removeMovie(movie) {
    const index = this.MOVIES.indexOf(movie);
    if (index !== -1) {
        this.MOVIES.splice(index, 1);
    } 
    return this.MOVIES;       
  }
}
