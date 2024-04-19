import { Module } from '@nestjs/common';
import { PeosonService } from './peoson.service';
import { PeosonController } from './peoson.controller';

@Module({
  controllers: [PeosonController],
  providers: [PeosonService],
})
export class PeosonModule {}
