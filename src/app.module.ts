import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bullmq';
import { AudioModule } from './audio/audio.module';

@Module({
  imports: [
    BullModule.forRoot({
      connection:{
        host:'localhost',
        port:6379,
      }
    }),
    AudioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
