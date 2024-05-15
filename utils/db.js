const mongo = require('mongodb').MongoClient;

// Extract variables from the .env or use default values
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';

class DBClient {
  constructor() {
    this.db = mongo.connect(`mongodb://${host}:${port}`, { useUnifiedTopology: true });
  }

  isAlive() {
    return this.db;
  }

  async nbUsers() {
    return (await this.db).db(database).collection('users').countDocuments();
  }

  async nbFiles() {
    return (await this.db).db(database).collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
