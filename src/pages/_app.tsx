import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import { ThemeProvider } from 'next-themes'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
})

const cache = new InMemoryCache()
const client = new ApolloClient({
  link: httpLink,
  cache,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="bg-lighttheme dark:bg-darktheme">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
