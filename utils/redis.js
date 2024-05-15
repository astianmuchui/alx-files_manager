const redis = require('redis');

class RedisClient {
    constructor() {
        this.client = redis.createClient();
        this.client.on('error', (err) => console.log(`Redis client not connected to the server: ${err.message}`));
    }

    isAlive() {
        return this.client.connected;
    }

    async get(key) {
        const value = await this.client.get(key);
        return value;
    }

    async set(key, value, duration) {
        await this.client.set(key, value);
        await this.client.expire(key, duration);
    }

    async del(key) {
        await this.client.del(key);
    }
}

export default redisClient = new RedisClient();
