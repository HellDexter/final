import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Přidání arabského fontu */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
