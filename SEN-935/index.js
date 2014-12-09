'use strict';

var AWS = require('aws-sdk'),
    kinesisConfig = require('./config.json');

AWS.config.region = 'us-west-2';

var kinesis = new AWS.Kinesis();

kinesis.getShardIterator({
    ShardId: kinesisConfig.shardId,
    ShardIteratorType: 'AT_SEQUENCE_NUMBER',
    StreamName: kinesisConfig.streamName,
    StartingSequenceNumber: kinesisConfig.startingSequenceNumber
},
function(err, data) {
    if (err) console.log(err, err.stack);
    kinesis.getRecords({
        ShardIterator: data.ShardIterator,
        Limit: 100
    },
    function(err, data) {
        if (err) console.log(err, err.stack);
        data.Records.forEach(function (record) {
            console.log(record.Data.toString());
        });
    });
});
