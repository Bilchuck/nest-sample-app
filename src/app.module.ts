import { CatsController } from 'cats/cats.controller';
import { Module } from '@nestjs/common';
import CatsService from 'cats/cats.service';
import { CatsModule } from 'cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
