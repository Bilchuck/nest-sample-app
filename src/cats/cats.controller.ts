import { Controller, Get, Post, Req, Body, Put, Query, Param } from "@nestjs/common";
import CatsService from "./cats.service";
import ICat from "./ICat";
import ICreateCatDTO from "./dto/create-cat.dto";
import { identity } from "rxjs";

@Controller('cats')
export class CatsController {
  cats = [1,2,3,4]
  constructor(private readonly catsService: CatsService) {

  }

  @Get()
  async getCats(): Promise<ICat[]> {
    return this.catsService.findAll()
  }

  @Post()
  async createCat(@Body() catDTO: ICreateCatDTO) {
    await this.catsService.createCat(catDTO)
  }

  @Put(':id')
  async editCat(@Param('id') id: string, @Body() catDTO: ICreateCatDTO) {
    await this.catsService.editCat(id, catDTO)
  }
}
