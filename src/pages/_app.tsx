import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import { ThemeProvider } from 'next-themes'
import { createClient, Provider } from 'urql'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const client = createClient({
  url: GITHUB_BASE_URL,
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    }
  },
})

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
