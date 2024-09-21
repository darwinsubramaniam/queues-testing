import { OnWorkerEvent, Processor, WorkerHost } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
import { Job } from "bullmq";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


@Processor('audio')
export class AudioProcessor extends WorkerHost{

    private readonly logger = new Logger(AudioProcessor.name);

    async process(job: Job, token?: string): Promise<any> {
        this.logger.debug('Start transcoding');
        this.logger.debug(job.data);
        this.logger.debug(`Token : ${token}`)
        await sleep(job.data.sleep)
        this.logger.debug('Transcoding Completed');
        return Promise.resolve("Darwin")
        
    }

    @OnWorkerEvent('completed')
    onCompleted(){
        this.logger.debug('Audio Transcoding Completed');
    }
}