/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { iMovie } from './movies.interface';
import { MovieDto } from './movies.dto';

@Controller('movies')
export class MoviesController {
  public constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getMovies(): Promise<iMovie[]> {
    return this.moviesService.getMovies();
  }

  @Get(':id')
  async getMoviesById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<any> {
    return await this.moviesService.getMovieById(id);
  }

  @Post()
  create(@Body() movies: iMovie) {
    return this.moviesService.addMovie(movies);
  }

  @Delete(':id')
  deleteTrackById(@Param('id') id: number) {
    return this.moviesService.deleteMovieById(id);
  }

  @Put(':id')
  @HttpCode(204)
  updateMovieById(
    @Param('id') id: number,
    @Body() body: iMovie,
  ): Promise<void> {
    return this.moviesService.updateMovieById(id, body);
  }
}