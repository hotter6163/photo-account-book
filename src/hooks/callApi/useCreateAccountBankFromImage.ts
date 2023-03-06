import { google } from '@google-cloud/vision/build/protos/protos';
import { useAsyncCallback } from 'react-async-hook';

export const useCreateAccountBankFromImage = () =>
  useAsyncCallback(() =>
    fetch('/api/createAccountBankFromImage')
      .then((res) => res.json())
      .then(({ data }) => data as unknown as google.cloud.vision.v1.IEntityAnnotation[]),
  );
