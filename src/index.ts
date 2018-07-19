import * as _assert from 'assert'
import * as _koa from 'koa'
import * as _socket from 'socket.io'
import _config from './config'
import _helper from './lib/helper'
import { MongoClient } from 'mongodb'



var url = 'mongodb://localhost:27017/mydb';

//插入操作
MongoClient.connect(url, { useNewUrlParser: true, auth: { user: 'mydb', password: 'mydb' } }, (err, client) => {
    client.withSession(
        async function (session) {
            
            const demoCollection = client.db().collection('demo');
            var map = 'function() { emit(this.a+1, this.a); }';
            var reduce = 'function(k,vals) { return Array.sum(vals); }';
            demoCollection.find({}).toArray(function(err, result) {
                console.log(result)
            });
            demoCollection.mapReduce(map, reduce, { out: { replace: 'tempCollection' } }, function(
                err,
                demoCollection
            ) {
                demoCollection.find({}).toArray(function(err, result) {
                    console.log(result)
                });
            });
            
        });
})