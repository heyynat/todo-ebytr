const { MongoClient } = require('mongodb');

require('dotenv').config();

const DB_NAME = 'ebytr';
const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/${DB_NAME}`;
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  try {
    connection = connection || (connection = (await MongoClient.connect(
      MONGO_DB_URL, OPTIONS,
      )).db(DB_NAME));
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
