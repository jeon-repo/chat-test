import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://janos:1f2d3s4a@localhost:27017/admin'),
  ],
})
export class DbModule {}
