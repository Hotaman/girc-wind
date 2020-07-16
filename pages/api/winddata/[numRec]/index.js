import nextConnect from "next-connect";
import middleware from "../../../../middlewares/middleware";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    //console.log(`In API handler - recs: ${req.query.numRec}`);
    if (req.dbClient && req.dbClient.isConnected()) {
        const windData = await req.db
            .collection("climate")
            .find()
            .sort({ _id: -1 })
            .limit(parseInt(req.query.numRec))
            .toArray(function(err, docs) {
                res.send(docs);
            });
    }
});

export default handler;
