import { Html, Head, Main, NextScript } from "next/document";

 function Document() {
  return (
    <Html lang="en">
      <Head >
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-..."
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document