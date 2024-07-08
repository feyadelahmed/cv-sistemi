const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config()

const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_ADDRESS = process.env.MONGODB_ADDRESS;
const MONGODB_NAME = process.env.MONGODB_NAME;

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_ADDRESS}`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let database;
const connect = async () => {
    if (database) return database;
    database = await client.db(MONGODB_NAME);
    return database;
}

module.exports = connect;