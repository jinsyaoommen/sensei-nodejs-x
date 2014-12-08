'use strict';

var AWS = require('aws-sdk'),
    snsConfig = require('./config.json');

AWS.config.region = 'us-west-2';

var sns = new AWS.SNS();

sns.publish({
    TopicArn: snsConfig.topicArn,
    Message: snsConfig.message
},
function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});


