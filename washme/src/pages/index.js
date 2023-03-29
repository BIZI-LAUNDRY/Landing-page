import Head from 'next/head'
import { Inter } from 'next/font/google'
import About from '@/components/about'
import Screen from '@/components/multiple-screen'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WashMe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="presentation">
          <About/>
          <Screen/>
        </section>
      </main>
    </>
  )
}
