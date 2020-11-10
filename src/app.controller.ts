import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Get()
  @Render('index')
  root(
  ) {
    return {

    }
  }

  @Get('performance')
  async performance() {
    const result = await this.appService.findResult();

    return result;
  }
}
