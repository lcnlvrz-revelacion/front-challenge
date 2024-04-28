import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BookModule } from './modules/book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017'),
    BookModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
