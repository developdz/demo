import * as _koa from 'koa'
import * as _socket from 'socket.io'
// import _config from './config'
import _helper from './lib/helper'

console.log('hello');

// import * as tf from '@tensorflow/tfjs';

// const model = tf.sequential();
// model.add(tf.layers.dense({units: 1, inputShape: [1]}));
// model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
// const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
// const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// model.fit(xs, ys, {epochs: 10}).then(() => {
//   console.log(model.predict(tf.tensor2d([5], [1, 1])));
// });



var MongoClient = require('mongodb').MongoClient;
var test = require('assert');

//test数据库的路径
var url = 'mongodb://localhost:27017/mydb';

//插入文档
// var insertDocument = (db,callback) => {
//     const collection = db.collection('documents');
//     // Insert some documents
//     collection.insertMany([
//       {a : 1}, {a : 2}, {a : 3}
//     ], function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     });
// };

//插入操作
MongoClient.connect(url,{ useNewUrlParser: true,auth:{user:'mydb',password:'mydb'} }, (err,client) => {
    
    // client.withSession(function(cs){
        

         
        const col = client.db('mydb').collection('createIndexExample1');
        var cs=client.startSession();
        cs.startTransaction({ });
        // Insert a bunch of documents
        col.insertOne({a:9, b:10},{session:cs}, function(err, result) {
            console.log(err)
            test.equal(null, err);
            // cs.commitTransaction() 
            col.find({}).toArray(function(err, docs) {
                test.equal(err, null);
                console.log(docs);
                cs.abortTransaction()
            });
            //cs.commitTransaction()  //（或者 cs.abortTransaction()
            // Show that duplicate records got dropped
            // col.aggregation({}, {cursor: {}}).toArray(function(err, items) {
            //   test.equal(null, err);
            //   test.equal(4, items.length);
            //   client.close();
            // });
        });
    // })
    
});



// console.log(_helper.getBasePath())
// var app = new _koa()
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

// app.listen(_config.port);

// begin



// 	select ps_game_kind.kindID, kindName, ps_game_module.sortID, moduleID, moduleName, moduleEnName, version

//     from ps_game_module 

//     left join ps_game_kind

//     on ps_game_module.kindID = ps_game_kind.kindID

//     where ps_game_module.enable = 1 order by ps_game_kind.sortID, ps_game_module.sortID;



// end