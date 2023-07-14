import Header from "@/components/common/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pluto</title>
      </Head>
      <Header />
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
