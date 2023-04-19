import { Module } from '@nestjs/common';
import { CacheConfigModule } from '~shared/cache-config/cache-config.module';
import { QueueConfigModule } from '~shared/queue-config/queue-config.module';

@Module({
  imports: [
    CacheConfigModule,
    QueueConfigModule,
  ],
})
export class SharedModule {}
