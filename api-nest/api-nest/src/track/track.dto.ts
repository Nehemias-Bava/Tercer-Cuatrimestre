import { IsString, IsNumber, Min, Max } from 'class-validator';
export class TrackDto {
  @IsString()
  title: string;
  @IsNumber()
  @Min(60)
  @Max(480)
  duration: number;
  @IsString()
  artist: string;
}