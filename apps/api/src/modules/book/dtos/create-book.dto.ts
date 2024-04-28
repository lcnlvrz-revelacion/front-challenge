import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsString,
  isString,
} from 'class-validator';
import { Genre, genres } from '../book.schema';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class CreateBookBodyDTO {
  @ApiProperty()
  @Expose()
  @IsString()
  title: string;

  @ApiProperty()
  @Expose()
  @IsString()
  author: string;

  @ApiProperty()
  @Expose()
  @IsString()
  description: string;

  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  @Expose()
  @IsString()
  @IsEmail()
  createdByEmail: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsDateString()
  publishedDate: Date;

  @ApiProperty({
    enum: genres,
  })
  @Expose()
  @IsString()
  @IsEnum(genres)
  genre: Genre;
}
