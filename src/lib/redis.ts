import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: 'https://usw1-allowing-zebra-33433.upstash.io',
  token: process.env.REDIS_KEY!,
});
