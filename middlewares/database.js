import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function database(req, res, next) {
    if (!client.isConnected()) {
        //console.log("Connecting");
        await client.connect();
    }
    //console.log(`Connect status: ${client.isConnected()}`);
    req.dbClient = client;
    req.db = client.db(process.env.DB_NAME);
    return next();
}
