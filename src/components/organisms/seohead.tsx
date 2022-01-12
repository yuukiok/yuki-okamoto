import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  title: string
  description?: string
  url: string
}

export const SEOHead: NextPage<Props> = ({ title, description, url }) => {
  const ogpImage = 'https://twitter.com/yuki_0206_cs/photo'
  const defaultDescription = "Yuki Okamoto's portfolio site"

  const router = useRouter()
  const path = router.asPath
  const isBlogPage = /\/blogs\/.+$/.test(path)

  const thumbnail = '/my_icon.jpg'
  // https://twitter.com/yuki_0206_cs/photo

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:locale" content="en" />
      <meta property="og:title" content="Yuki's portfolio" />
      <meta property="og:url" content={`https://yukiokamoto.io${url}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="yuki_0206_cs" />
      {isBlogPage ? (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={thumbnail} />
        </>
      ) : (
        <>
          <meta name="description" content={defaultDescription} />
          <meta property="og:description" content={defaultDescription} />
          <meta property="og:image" content={ogpImage} />
        </>
      )}
    </Head>
  )
}
