'use strict';

var AWS = require('aws-sdk'),
    sqsConfig = require('./config.json');

AWS.config.region = 'us-west-2';

var sqs = new AWS.SQS();

sqs.sendMessage({
    MessageBody: 'Message to SQS',
    QueueUrl: sqsConfig.queueUrl
},
function(err, data) {
    if (err) console.log(err);
    console.log(data);
});
