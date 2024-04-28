import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export const genres = ['fiction', 'narrative', 'mystery', 'novel'] as const;

export type Genre = (typeof genres)[number];

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  description: string;

  @Prop()
  createdByEmail: string;

  @Prop()
  publishedDate: Date;

  @Prop({
    type: String,
  })
  genre: Genre;
}

export const BookSchema = SchemaFactory.createForClass(Book);

export type BookHydrated = HydratedDocument<Book>;
