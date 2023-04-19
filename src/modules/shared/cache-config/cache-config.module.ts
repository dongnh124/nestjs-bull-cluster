import { CacheModuleOptions, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis';
import { cacheConfig } from '~/config';

const cacheOptions: CacheModuleOptions = {
  isGlobal: true,
  ttl: cacheConfig.ttl,
  store: redisStore,
  clusterConfig: {
    nodes: [
      {
        port: cacheConfig.port,
        host: cacheConfig.host,
      },
    ],
    options: {
      maxRedirections: 16,
      dnsLookup: (address, callback) => callback(null, address),
      redisOptions: {},
    },
  },
};

@Module({
  imports: [CacheModule.register(cacheOptions)],
})
export class CacheConfigModule {}
