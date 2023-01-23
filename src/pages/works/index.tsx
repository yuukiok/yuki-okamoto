import { GetStaticProps, NextPage } from 'next';
import { client_works, GET_WORKS_DATA } from '../../lib/urqlClient';
import Image from 'next/legacy/image';
import Spacer from '../../components/layout/spacer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SEOHead } from '../../components/organisms/seohead';

function GraphCMSImageLoader({ src, width }: any) {
  const relativeSrc = (src: any) => src.split('/').pop();
  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}

type Props = {
  work: Work[];
};
type Work = {
  id: string;
  title: string;
  url: string;
  image: Image;
};
type Image = {
  url: string;
  width: number;
  height: number;
};

const Index: NextPage<Props> = ({ work }) => {
  const works = work;
  const router = useRouter();
  const url = router.asPath;
  return (
    <>
      <SEOHead title="Yuki Okamoto - Works Page" url={url} />
      <Spacer>
        <div className="pt-20 text-xl md:text-5xl font-extrabold border-b-4 w-fit pb-1">
          Works
        </div>
        <ul className="py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works &&
            works.map((work: Work) => {
              return (
                <Link
                  key={work.id}
                  href={work.url}
                  rel="noreferrer"
                  target="_blank"
                  className="mx-auto w-full group"
                >
                  <div className="overflow-hidden rounded-md">
                    <div className="group-hover:scale-110 group-hover:opacity-80">
                      <Image
                        loader={GraphCMSImageLoader}
                        src={work.image.url}
                        priority={true}
                        quality={10}
                        width={300}
                        height={200}
                        alt="portfolio image"
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <p className="font-semibold text-lg text-center">
                    {work.title}
                  </p>
                </Link>
              );
            })}
        </ul>
      </Spacer>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client_works.query(GET_WORKS_DATA).toPromise();
  const work = data.work;
  return {
    props: {
      work,
    },
    revalidate: 10,
  };
};
