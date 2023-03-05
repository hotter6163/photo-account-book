'use client';

import { useCreateAccountBankFromImage } from '@/hooks/callApi/useCreateAccountBankFromImage';

export default function Home() {
  const { execute: createAccountBank } = useCreateAccountBankFromImage();

  return (
    <main className='w-full h-full flex justify-center items-center'>
      <button onClick={() => createAccountBank().then((data) => console.log(data))}>
        CreateAccountBank
      </button>
    </main>
  );
}
