import { NestMiddleware, MiddlewareFunction } from "@nestjs/common";

export default class LoggerMiddleWare implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const id = Math.random()
      console.log(`${id}: NEW SERVER reQUEST`)
      console.log(`${id}: REQ: `, req)
      next()
    }
  }
}
