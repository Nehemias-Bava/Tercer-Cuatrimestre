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
import { TrackService } from './track.service';
import { iTrack } from './track.interface';

@Controller('tracks')
export class TrackController {
  public constructor(private readonly trackService: TrackService) {}
  @Get()
  getTracks(): Promise<iTrack[]> {
    return this.trackService.getTracks();
  }

  @Get(':id')
  async getTrackById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<any> {
    return await this.trackService.getTrackById(id);
  }

  @Post()
  create(@Body() track: iTrack) {
    return this.trackService.addTrack(track);
  }

  @Delete(':id')
  deleteTrackById(@Param('id') id: number) {
    return this.trackService.deleteTrackById(id);
  }

  @Put(':id')
  @HttpCode(204)
  updateTrackById(
    @Param('id') id: number,
    @Body() body: iTrack,
  ): Promise<void> {
    return this.trackService.updateTrackById(id, body);
  }
}
