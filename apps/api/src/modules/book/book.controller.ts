import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookBodyDTO } from './dtos/create-book.dto';
import { RemoveBookParamsDTO } from './dtos/remove-book.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { BookGuard, RequestBook } from './guards/book.guard';
import { ReqBook } from './decorators/book.decorator';
import { BookHydrated } from './book.schema';
import { UpdateBookBodyDTO } from './dtos/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({
    description: 'Create a new book',
  })
  @Post()
  async create(@Body() body: CreateBookBodyDTO) {
    return await this.bookService.create(body);
  }

  @ApiParam({
    name: 'id',
    type: String,
    description: 'Book ID',
  })
  @ApiOperation({
    description: 'Update a book by ID',
  })
  @Put(':id')
  @UseGuards(BookGuard)
  async update(@Body() body: UpdateBookBodyDTO, @ReqBook() book: RequestBook) {
    console.log('found book', book);
    return await this.bookService.update(book, body);
  }

  @ApiParam({
    name: 'id',
    type: String,
    description: 'Book ID',
  })
  @ApiOperation({
    description: 'Delete a book by ID',
  })
  @Delete(':id')
  async delete(@Param() params: RemoveBookParamsDTO) {
    return await this.bookService.remove(params);
  }

  @ApiOperation({
    description: 'List all books',
  })
  @Get()
  async list() {
    return await this.bookService.list();
  }
}
