import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PeosonService } from './peoson.service';
import { CreatePeosonDto } from './dto/create-peoson.dto';
import { UpdatePeosonDto } from './dto/update-peoson.dto';

@Controller('api/peoson')
export class PeosonController {
  constructor(private readonly peosonService: PeosonService) {}

  @Get()
  findAll() {
    return this.peosonService.findAll();
  }

  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received name: ${name}, age: ${age}`
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `receivedid: ${id}`
  }

  @Post()
  body(@Body() createPeosonDto: CreatePeosonDto) {
    return `received body${JSON.stringify(CreatePeosonDto)}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeosonDto: UpdatePeosonDto) {
    return this.peosonService.update(+id, updatePeosonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peosonService.remove(+id);
  }
}
