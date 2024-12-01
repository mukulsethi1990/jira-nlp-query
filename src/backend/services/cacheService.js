import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);
const CACHE_TTL = 300; // 5 minutes

export async function getCachedResult(query) {
  try {
    const cached = await redis.get(query);
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    console.error('Cache retrieval error:', error);
    return null;
  }
}

export async function cacheResult(query, result) {
  try {
    await redis.set(
      query,
      JSON.stringify(result),
      'EX',
      CACHE_TTL
    );
  } catch (error) {
    console.error('Cache storage error:', error);
  }
}

export async function clearCache() {
  try {
    await redis.flushall();
  } catch (error) {
    console.error('Cache clear error:', error);
  }
}