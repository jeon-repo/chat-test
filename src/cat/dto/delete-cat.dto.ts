import { IsString } from 'class-validator';

export class DeleteCatDto {
  @IsString()
  readonly name: string;
}
