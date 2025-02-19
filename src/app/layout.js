import { Header } from '@/components/header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Footer } from '@/components/footer';
import Head from 'next/head';

const robotoFont = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Ernst & Co. Wealth Management, LLC',
  description: 'Personalized and Precision Wealth Management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Home | Ernst & Co. Wealth Management, LLC</title>
        <meta name="robots" content="index, follow" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content="Home"
        />
        <meta name="twitter:title" content="Home" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:site_name"
          content="Ernst & Co. Wealth Management, LLC"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content="https://www.ernstwealth.com/"
        />
      </Head>
      <body className={`${robotoFont.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
