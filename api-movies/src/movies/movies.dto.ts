import { IsString, IsNumber, Min, Max } from 'class-validator';
export class MovieDto {
  @IsString()
  title: string;
  @IsNumber()
  @Min(60)
  @Max(480)
  duration: number;
  @IsString()
  director: string;
}