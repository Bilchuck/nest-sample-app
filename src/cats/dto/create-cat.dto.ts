import { IsString } from "class-validator";

export default class CreateCatDTO {
  @IsString()
  readonly name: string
}
