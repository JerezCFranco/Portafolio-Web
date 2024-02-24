import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from '../../../services/movie-search.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-buscador-peliculas',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, FormsModule],
  templateUrl: './buscador-peliculas.component.html',
  styleUrl: './buscador-peliculas.component.css'
})
export class BuscadorPeliculasComponent implements OnInit{


  searchInput: string = '';
  results: any[] = [];
  posterPath: string = '';

  constructor(private movieSearchService: MovieSearchService, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Buscar Películas');
  }

  onSearchClick(): void {
    this.results = [];
    this.movieSearchService.searchMovies(this.searchInput)
      .then((movies: any) => this.results = movies.results);
  }

}
