import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GalerriesService } from './galerries.service';
import { CreateGalerryDto } from './dto/create-galerry.dto';
import { UpdateGalerryDto } from './dto/update-galerry.dto';
import { Header } from '@nestjs/common'
@Controller('galerries')
export class GalerriesController {
  constructor(private readonly galerriesService: GalerriesService) {}

  @Post()
  create(@Body() createGalerryDto: CreateGalerryDto) {
    return this.galerriesService.create(createGalerryDto);
  }

  @Get()

  findAll() {
    return this.galerriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.galerriesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGalerryDto: UpdateGalerryDto) {
    return this.galerriesService.update(+id, updateGalerryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galerriesService.remove(+id);
  }
}
