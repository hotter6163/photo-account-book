import 'server-only';
import { ImageAnnotatorClient } from '@google-cloud/vision';

const client = new ImageAnnotatorClient();

const BUCKET = 'account-bank-receipt-bucket';

export const detectText = (fileName: string) =>
  client.textDetection(`gs://${BUCKET}/${fileName}`).then(([result]) => result.textAnnotations);
