import React from 'react';
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import '../styles/codeblock.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNProgress color='#232c34' height={3} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
