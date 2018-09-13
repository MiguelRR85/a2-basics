import { Film } from './../../../shared/models/film.model';
import filmsMock from './../../../shared/data/films.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html'
})

export class FilmListComponent {
  films: Array<Film> = filmsMock;

  onDeleteFilm(event: Film):void{
    this.films = this.films.filter(film => film !== event);
  }

  // ocClickCreateFilm(): void {
  //   this.films.push(this.filmToCreate);
  //   this.filmToCreate = new Film();
  // }

  // onChangePosterInput(poster: string): void {
  //   this.posterPreview = poster;
  // }

}