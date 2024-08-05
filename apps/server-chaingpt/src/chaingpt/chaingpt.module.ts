import { Module } from '@nestjs/common';
import { ChaingptService } from './chaingpt.service';
import { ChaingptController } from './chaingpt.controller';

@Module({
  controllers: [ChaingptController],
  providers: [ChaingptService],
})
export class ChaingptModule {}
