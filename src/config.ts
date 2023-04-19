import * as dotenv from 'dotenv';
dotenv.config();

const serverConfig = {
  port: process.env.PORT,
};

const cacheConfig = {
  host: process.env.CACHE_HOST,
  port: process.env.CACHE_PORT,
  ttl: 365 * 24 * 60 * 60,
};

const queueConfig = {
  host: process.env.QUEUE_HOST,
  port: process.env.QUEUE_PORT,
  prefix: process.env.QUEUE_PREFIX,
};

export { serverConfig, cacheConfig, queueConfig };
