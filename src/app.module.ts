import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://janos:1f2d3s4a@localhost:27017/wlm_chat'),
    CatModule,
  ],
})
export class AppModule {}
