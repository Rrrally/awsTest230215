
const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const Sharp = require('sharp');
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
    // S3 bucket name and key for the input image
    const srcBucket = event.Records[0].s3.bucket.name;
    const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
  
    // Set up S3 bucket and key for the output image
    const dstBucket = `${srcBucket}-resized`;
    const dstKey = `resized-${srcKey}`;
  
    // Check if the image is already resized
    if (srcKey.includes('resized-')) {
      console.log('Image is already resized');
      return;
    }
  
    try {
      // Retrieve the image from S3
      const params = {
        Bucket: srcBucket,
        Key: srcKey,
      };
      const origImage = await S3.getObject(params).promise();
  
      // Resize the image using Sharp
      const resizedImage = await Sharp(origImage.Body)
        .resize(500, 500)
        .toBuffer();
  
      // Upload the resized image to S3
      const uploadParams = {
        Bucket: dstBucket,
        Key: dstKey,
        Body: resizedImage,
        ContentType: origImage.ContentType,
      };
      await S3.upload(uploadParams).promise();
  
      console.log('Successfully resized image');
    } catch (error) {
      console.error(error);
    }
  };
  
  






