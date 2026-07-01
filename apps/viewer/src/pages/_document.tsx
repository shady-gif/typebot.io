import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html translate="no">
    <Head>
      <link rel="icon" type="image/png" href="/images/shadyy-leads-logo.png" />
      <script src="/__ENV.js" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
