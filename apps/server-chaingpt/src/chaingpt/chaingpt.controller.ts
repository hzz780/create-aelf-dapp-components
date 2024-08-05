import { Controller, Get, Post, Body, Sse } from '@nestjs/common';
import { ChaingptService } from './chaingpt.service';
import { CreateChaingptDto } from './dto/create-chaingpt.dto';
import { Observable } from 'rxjs';

@Controller('chaingpt')
export class ChaingptController {
  constructor(private readonly chaingptService: ChaingptService) {}

  @Post()
  @Sse()
  chatCus(
    @Body() createChaingptDto: CreateChaingptDto,
  ): Observable<{ data: string }> {
    return this.chaingptService.chat(createChaingptDto);
  }

  @Get()
  findAll() {
    return this.chaingptService.findAll();
  }
}
