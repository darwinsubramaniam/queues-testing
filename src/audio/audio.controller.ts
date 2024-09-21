import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AudioService } from './audio.service';

@Controller('audio')
export class AudioController {
    constructor(
        private readonly audioService:AudioService
    ){}

    @Post('transcode')
    async transcode(@Body()data:{sleepTime:number}){
        return this.audioService.runTranscoding(data.sleepTime)
    }

    @Get(':id')
    async getTranscodeStatus(@Param('id') id:string){
        return this.audioService.getJobStatus(id)
    }
}
