import { PartialType } from '@nestjs/mapped-types';
import { CreateBookBodyDTO } from './create-book.dto';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { RetrieveBookParamsDTO } from './retrieve-book.dto';
import { ApiProperty } from '@nestjs/swagger';
import { genres, Genre } from '../book.schema';

@Exclude()
export class UpdateBookBodyDTO {
  @IsOptional()
  @ApiProperty()
  @Expose()
  @IsString()
  title: string;

  @IsOptional()
  @ApiProperty()
  @Expose()
  @IsString()
  author: string;

  @IsOptional()
  @ApiProperty()
  @Expose()
  @IsString()
  description: string;

  @IsOptional()
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  @Expose()
  @IsString()
  @IsEmail()
  createdByEmail: string;

  @IsOptional()
  @ApiProperty()
  @Expose()
  @IsString()
  @IsDateString()
  publishedDate: Date;

  @IsOptional()
  @ApiProperty({
    enum: genres,
  })
  @Expose()
  @IsString()
  @IsEnum(genres)
  genre: Genre;
}

@Exclude()
export class UpdateBookParamsDTO extends RetrieveBookParamsDTO {}
