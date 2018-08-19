import { CatsController } from './cats.controller';
import { Module } from '@nestjs/common';
import CatsService from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
