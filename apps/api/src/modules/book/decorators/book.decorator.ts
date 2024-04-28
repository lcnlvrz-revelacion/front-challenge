import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { BOOK_REQUEST_KEY } from '../guards/book.guard';

export const ReqBook = createParamDecorator(
  (_, executionContext: ExecutionContext) => {
    const http = executionContext.switchToHttp();
    const request: Request = http.getRequest();
    return request[BOOK_REQUEST_KEY];
  },
);
