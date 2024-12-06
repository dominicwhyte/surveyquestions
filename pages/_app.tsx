import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Survey Question Generator | Free Survey Templates</title>
        <meta name="description" content="Generate professional survey questions instantly. Free templates for customer feedback, employee satisfaction, market research, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}