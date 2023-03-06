import { DetectTextCommand, RekognitionClient } from '@aws-sdk/client-rekognition';

const BUCKET = 'photo-account-book'; // the bucketname without s3://
const PHOTO = 'S__21086211.jpg';

const client = new RekognitionClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
  region: 'ap-northeast-1',
});

const command = new DetectTextCommand({
  Image: {
    S3Object: {
      Bucket: BUCKET,
      Name: PHOTO,
    },
  },
});

export const detectText = () => client.send(command);
