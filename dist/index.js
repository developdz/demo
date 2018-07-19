"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
var url = 'mongodb://localhost:27017/mydb';
//插入操作
mongodb_1.MongoClient.connect(url, { useNewUrlParser: true, auth: { user: 'mydb', password: 'mydb' } }, (err, client) => {
    client.withSession(async function (session) {
        const demoCollection = client.db().collection('demo');
        session.startTransaction({});
        await demoCollection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
        try {
            await session.commitTransaction();
        }
        catch (error) {
            await session.abortTransaction();
            throw error;
        }
        demoCollection.find({}).toArray(function (err, docs) {
            console.log("Found the following records");
            console.log(docs);
            console.log(docs[0]._id.toString());
        });
        var map = 'function() { emit(this.a, 1); }';
        var reduce = 'function(k,vals) { return 1; }';
        demoCollection.mapReduce(map, reduce, { out: { replace: 'tempCollection' } }, function (err, demoCollection) {
            demoCollection.findOne({ _id: 1 }, function (err, result) {
                console.log(result);
            });
        });
    });
});
//# sourceMappingURL=index.js.map