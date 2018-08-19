import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "../../node_modules/@nestjs/common";
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export default class ValidationPipe implements PipeTransform<any> {
  async transform(value, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }
    const object = plainToClass(metatype, value)
    const errors = await validate(object)
    if (errors.length > 0) {
      throw new BadRequestException()
    }
    return value
  }

  toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object]
    return !(metatype in types)
  }
}
