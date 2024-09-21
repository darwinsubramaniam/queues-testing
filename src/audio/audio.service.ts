import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class AudioService {
    constructor(@InjectQueue('audio') private audioQueue:Queue){}

    async runTranscoding(sleepTime:number){
        const job = this.audioQueue.add('audio', {
            sleep:sleepTime
        })
        return ((await job).toJSON())
    }

    async getJobStatus(id:string) {
        const job = this.audioQueue.getJob(id)

        return (await job).toJSON()
    }

    async deleteJobData(id:string){
        const job = this.audioQueue.getJob(id);

        (await job).discard()
    }
}
