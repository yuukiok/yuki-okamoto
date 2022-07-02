import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'urql'
import { client } from '../lib/urqlClient'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="bg-lighttheme dark:bg-darktheme">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
