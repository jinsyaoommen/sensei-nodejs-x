'use strict';

var AWS = require('aws-sdk');

AWS.config.region = 'us-west-2';

var S3 = new AWS.S3();

console.log('Loading Event');

exports.logS3Event = function(event, context) {
    console.log('Received Event: ');
    console.log(JSON.stringify(event, null, ' '));
    context.done(null, '');
};
