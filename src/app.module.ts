import { CatsController } from 'cats/cats.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import CatsService from 'cats/cats.service';
import { CatsModule } from 'cats/cats.module';
import LoggerMiddleWare from 'middleware/logger';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes('/cats')
  }
}
