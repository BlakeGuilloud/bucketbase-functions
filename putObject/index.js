'use strict';

const S3 = require('aws-sdk/clients/s3');

const S3_Bucket = process.env['S3_BUCKET'];
const S3_Region = process.env['S3_REGION'];

module.exports.invoke = (event, context, callback) => {
  const S3_Prefix = event.prefix;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Lets put a something..',
      input: event,
    }),
  };

  callback(null, response);
};
