import { useAsyncCallback } from 'react-async-hook';

export const useCreateAccountBankFromImage = () =>
  useAsyncCallback(() =>
    fetch('/api/createAccountBankFromImage')
      .then((res) => res.json())
      .then(({ data }) => JSON.parse(data)),
  );
