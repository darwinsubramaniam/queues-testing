import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';
import { AudioService } from './audio.service';

@Module({
    imports:[
        BullModule.registerQueue({
            name:'audio',
        })
    ],
    controllers: [AudioController],
    providers:[AudioProcessor, AudioService]
})
export class AudioModule {}
