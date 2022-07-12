import { Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
      <Html className='bg-gray-200'>
        <Head />
        <body className='body-font h-max'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }