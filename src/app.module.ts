import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeosonModule } from './peoson/peoson.module';

@Module({
  imports: [PeosonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
