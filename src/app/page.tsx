'use client';

import { useState } from 'react';
import { useCreateAccountBankFromImage } from '@/hooks/callApi/useCreateAccountBankFromImage';

export default function Home() {
  const [result, setResult] = useState('');
  const { execute: createAccountBank } = useCreateAccountBankFromImage();

  return (
    <main className='flex justify-center items-center'>
      <div className='max-w-lg'>
        <button
          className='mb-4'
          onClick={() =>
            createAccountBank().then((data) =>
              setResult(data[0].description?.replaceAll('\n', ' ') ?? ''),
            )
          }
        >
          CreateAccountBank
        </button>
        <div>
          <p>{result}</p>
        </div>
      </div>
    </main>
  );
}
