import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  title: string
  description?: string
  url: string
}

export const SEOHead: NextPage<Props> = ({ title, description, url }) => {
  const defaultDescription =
    "Yuki Okamoto's work experiences, educations, and skills."

  const router = useRouter()
  const path = router.asPath
  const isBlogPage = /\/blogs\/.+$/.test(path)

  const thumbnail = '/portfolio.jpg'

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:locale" content="en" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`https://yukiok.com${url}`} />
      <meta property="og:site_name" content="Yuki Okamoto's Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={thumbnail} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yuki_0206_cs" />
      <meta name="twitter:image" content={thumbnail} />
      <meta name="twitter:domain" content="yukiok.com" />
      <meta name="twitter:title" content={title} />
      {isBlogPage ? (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      ) : (
        <>
          <meta name="description" content={defaultDescription} />
          <meta property="og:description" content={defaultDescription} />
          <meta name="twitter:description" content={defaultDescription} />
        </>
      )}
    </Head>
  )
}
