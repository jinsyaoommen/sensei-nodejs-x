'use strict';

var AWS = require('aws-sdk'),
    kinesisConfig = require('./config.json');

AWS.config.region = 'us-west-2';

var kinesis = new AWS.Kinesis();

var params = {
    StreamName: kinesisConfig.streamName,
    PartitionKey: kinesisConfig.partitionKey,
    Data: "streaming data to kinesis"

};

kinesis.putRecord(params, function(err, data) {
    if (err) console.log(err, err.stack);
    console.log(data);
});
