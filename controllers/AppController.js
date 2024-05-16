import dbClient from '../utils/db';
import redisClient from '../utils/redis';

export default class AppController {
  static getStatus(req, res) {
    if (dbClient.isAlive() && redisClient.isAlive()) {
      return res.status(200).send({ redis: true, db: true });
    }
    return res.status(500).send({ redis: false, db: true });
  }

  static async getStats(req, res) {
    const users = await dbClient.nbUsers();
    const files = await dbClient.nbFiles();

    return res.status(200).send({ users, files });
  }
}
