import { IsNumber, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsString({ each: true })
  readonly bread: string;
}
