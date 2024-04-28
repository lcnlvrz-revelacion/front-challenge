import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookHydrated } from './book.schema';
import { Model } from 'mongoose';
import { CreateBookBodyDTO } from './dtos/create-book.dto';
import { UpdateBookBodyDTO, UpdateBookParamsDTO } from './dtos/update-book.dto';
import { RemoveBookParamsDTO } from './dtos/remove-book.dto';
import { RequestBook } from './guards/book.guard';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<Book>,
  ) {}

  async create(dto: CreateBookBodyDTO) {
    return await this.bookModel.create({
      author: dto.author,
      createdByEmail: dto.createdByEmail,
      description: dto.description,
      genre: dto.genre,
      publishedDate: dto.publishedDate,
      title: dto.title,
    });
  }

  async list() {
    const books = await this.bookModel.find();

    return {
      books,
    };
  }

  async update(book: RequestBook, dto: UpdateBookBodyDTO) {
    return await this.bookModel.findOneAndUpdate(
      {
        _id: book._id,
      },
      dto,
      {
        new: true,
      },
    );
  }

  async remove(params: RemoveBookParamsDTO) {
    await this.bookModel.deleteOne({
      _id: params.id,
    });

    return {
      removed: true,
    };
  }

  async findById(id: string) {
    return await this.bookModel.findById(id);
  }
}
