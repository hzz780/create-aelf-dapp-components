import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChaingptModule } from './chaingpt/chaingpt.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ChaingptModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
