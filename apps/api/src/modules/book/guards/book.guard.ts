import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { RetrieveBookParamsDTO } from '../dtos/retrieve-book.dto';
import { validateOrReject } from 'class-validator';
import { BookHydrated } from '../book.schema';

export const BOOK_REQUEST_KEY = 'book';

export type RequestBook = BookHydrated;

@Injectable()
export class BookGuard implements CanActivate {
  constructor(private readonly bookService: BookService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const dto = plainToClass(RetrieveBookParamsDTO, request.params);

    try {
      await validateOrReject(dto);
    } catch (err) {
      throw new BadRequestException(err);
    }

    const book = await this.bookService.findById(dto.id);

    if (!book) throw new NotFoundException(`Book with ID ${dto.id} not found`);

    request[BOOK_REQUEST_KEY] = book satisfies RequestBook;

    return true;
  }
}
