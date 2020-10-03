import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  private topMovies = [
    {title: 'The Shawshank Redemption', director: 'Frank Darabont'},
    {title: 'The Godfather', director: 'Francis Ford Coppola'},
    {title: 'The Godfather: Part II', director: 'Francis Ford Coppola'},
    {title: 'The Dark Knight', director: 'Christopher Nolan'},
    {title: '12 Angry Men', director: 'Sidney Lumet'}
  ];
  private bottomMovies = [
    {title: 'Disaster Movie', director: 'Jason Friedberg, Aaron Seltze'},
    {title: 'Superbabies: Baby Geniuses 2', director: 'Bob Clark'},
    {title: 'Kod Adi K.O.Z.', director: ''},
    {title: 'Manos: The Hands of Fate', director: 'Harold P. Warren'},
    {title: 'Birdemic: Shock and Terror', director: 'James Nguyen'}
  ];

  constructor() {
  }

  public getTopMovies(): any {
    return this.topMovies;
  }

  public getBottomMovies(): any {
    return this.bottomMovies;
  }
}
