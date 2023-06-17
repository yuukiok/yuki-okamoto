import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Andada+Pro:wght@500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="snowman.png" />
          <meta property="og:title" content="Yuki Okamoto | Portfolio Site" />
          <meta
            property="og:description"
            content="Welcome to Yuki Okamoto's Portfolio Site. Explore my work, skills, and professional journey."
          />
          <meta property="og:url" content="https://yukiok.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
