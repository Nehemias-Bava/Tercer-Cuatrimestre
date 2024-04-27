import { Injectable, NotFoundException } from '@nestjs/common';
import { iMovie } from './movies.interface';
import { MovieDto } from './movies.dto';
const base_url: string = 'http://localhost:3030/movies/';
@Injectable()
export class MoviesService {
  async getMovies(): Promise<iMovie[]> {
    const res = await fetch(base_url);
    const movies = await res.json();
    return movies;
  }
  async getMovieById(id: number): Promise<iMovie> {
    try {
      const res = await fetch(base_url + id);
      const movie = await res.json();
      return movie;
    } catch (error) {
      throw new NotFoundException(`Movie con id '${id}' no existe`);
    }
  }

  async addTrack(movieDto: MovieDto): Promise<iMovie> {
    const newMovie = { ...movieDto };
    const res = await fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });
    const parsedResponse = await res.json();
    return parsedResponse;
  }

  async addMovie(movie: iMovie): Promise<iMovie> {
    const newMovie = { ...movie };
    const res = await fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });
    const parsedResponse = await res.json();
    return parsedResponse;
  }

  async deleteMovieById(id: number): Promise<any> {
    const res = await fetch(base_url + id, {
      method: 'DELETE',
    });
    const parsedResponse = await res.json();
    return parsedResponse;
  }

  async updateMovieById(id: number, body: iMovie): Promise<void> {
    const isMovie = await this.getMovieById(id);
    if (!Object.keys(isMovie).length) return; //early return
    const updatedMovie = { ...body, id };
    const res = await fetch(base_url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    });
    const parsedResponse = await res.json();
    return parsedResponse;
  }
}