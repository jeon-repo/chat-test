import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { DeleteCatDto } from './dto/delete-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async getAll(): Promise<Cat[]> {
    return await this.catService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') catId: number): Promise<Cat[]> {
    console.log(catId);
    return await this.catService.getOne(catId);
  }

  @Post()
  async create(@Body() catData: CreateCatDto) {
    return await this.catService.create(catData);
  }

  @Delete()
  async delete(@Body() catName: DeleteCatDto) {
    console.log('delete -> ', catName);
    await this.catService.deleteOne(catName);
  }
}
