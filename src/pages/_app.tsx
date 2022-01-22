import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'urql'
import { client } from '../lib/urqlClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
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
