import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="bg-lighttheme dark:bg-darktheme">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
