import { useAsyncCallback } from 'react-async-hook';

export const useCreateAccountBankFromImage = () =>
  useAsyncCallback(() => fetch('/api/createAccountBankFromImage'));
