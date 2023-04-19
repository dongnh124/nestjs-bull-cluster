import { Controller, Get, Post, Inject } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid'

@Controller('audio')
export class AudioController {
  constructor(
    @InjectQueue('audio') private readonly audioQueue: Queue,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  @Post('transcode')
  async transcode() {
    const id = uuidv4()
    await this.audioQueue.add('transcode', {
      file: 'audio.mp3',
      id,
    }, {
      removeOnComplete: true,
    });
    await this.cacheManager.set(id, 'PENDING')
    return true;
  }
}
