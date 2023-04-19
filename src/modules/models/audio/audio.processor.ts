import { Logger, Inject } from '@nestjs/common';
import { Process, Processor } from '@nestjs/bull';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Job } from 'bull';
import { Cache } from 'cache-manager';

@Processor('audio')
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache){}

  @Process('transcode')
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    this.logger.debug('Transcoding completed');
    await this.cacheManager.set(job.data.id, 'DONE');
  }
}
