import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pluto Labs</title>
        <meta property="og:title" content="Pluto Labs" />
        <meta property="og:url" content="https://www.pluto.im/" />
        <meta property="og:image" content="https://assets.scinapse.io/pluto-og-image.png" />
      </Head>

      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
