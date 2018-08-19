import { Controller, Get, Post, Req, Body } from "@nestjs/common";

@Controller('cats')
export class CatsController {
  cats = [1,2,3,4]
  constructor() {

  }

  @Get()
  getCats() {
    return this.cats
  }

  @Post()
  async addCat(@Body('cat') newCat: number) {
    await (new Promise(resolve => {
      setTimeout(_ => {
        this.cats.push(newCat)
        resolve()
      }, 1000)
    }))
    return true
  }
}
