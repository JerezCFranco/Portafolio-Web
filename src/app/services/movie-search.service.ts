import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieSearchService {
  private api_key = '812011deb0fa28d2817112a5204b2960';
  private urlBase = 'https://api.themoviedb.org/3/search/movie';
  private urlImg = 'https://image.tmdb.org/t/p/w200';
  

  searchMovies(searchInput: string): Promise<any> {
    const url = `${this.urlBase}?api_key=${this.api_key}&query=${searchInput}`;

    return fetch(url).then(response => response.json());
  }

  displayMovies(resultContainer: HTMLElement, movies: any[]): void {
    resultContainer.innerHTML = '';

    if (movies.length === 0) {
      resultContainer.innerHTML =
        '<p> No se encontraron resultados para tu búsqueda</p>';
      return;
    }

    movies.forEach((movie) => {
      const movieDiv = document.createElement('div');
      movieDiv.classList.add('movie');

      const title = document.createElement('h2');
      title.textContent = movie.title;

      const releaseDate = document.createElement('p');
      releaseDate.textContent =
        'La fecha de lanzamiento fue:' + movie.release_date;

      const overview = document.createElement('p');
      overview.textContent = movie.overview;

      const posterPath = this.urlImg + movie.poster_path;
      const poster = document.createElement('img');
      poster.src = posterPath;

      movieDiv.appendChild(poster);
      movieDiv.appendChild(title);
      movieDiv.appendChild(releaseDate);
      movieDiv.appendChild(overview);
      resultContainer.appendChild(movieDiv);
    });
  }
}
