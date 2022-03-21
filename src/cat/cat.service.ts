import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { DeleteCatDto } from './dto/delete-cat.dto';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async getAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async getOne(id: number) {
    return await this.catModel.find({ id: id });
  }

  async create(catData: CreateCatDto) {
    const latestId = await this.catModel.findOne();
    return await this.catModel.create({
      ...catData,
      id: parseInt(latestId ? latestId.id : 0) + 1,
    });
  }

  async deleteOne(catData: DeleteCatDto) {
    await this.catModel.deleteOne({ ...catData });
  }
}
