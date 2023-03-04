import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-full flex justify-center items-center'>
      <p>hello world</p>
    </main>
  )
}
