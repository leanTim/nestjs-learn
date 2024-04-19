import { Injectable } from '@nestjs/common';
import { CreatePeosonDto } from './dto/create-peoson.dto';
import { UpdatePeosonDto } from './dto/update-peoson.dto';

@Injectable()
export class PeosonService {
  create(createPeosonDto: CreatePeosonDto) {
    return 'This action adds a new peoson';
  }

  findAll() {
    return `This action returns all peoson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peoson`;
  }

  update(id: number, updatePeosonDto: UpdatePeosonDto) {
    return `This action updates a #${id} peoson`;
  }

  remove(id: number) {
    return `This action removes a #${id} peoson`;
  }
}
