import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { Cluster } from 'ioredis';

import { queueConfig } from '~/config';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: async () => ({
        createClient: (type, opt) =>
          new Cluster(
            [
              {
                host: queueConfig.host,
                port: +queueConfig.port,
              },
            ],
            opt,
          ),
        prefix: queueConfig.prefix,
      }),
    }),
  ],
})
export class QueueConfigModule {}
