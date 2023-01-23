import { NextPage } from 'next';
import Image from 'next/legacy/image';
import { SnsIntro, SNS } from '../molecules/snsIntro';

type Props = {
  theme: string;
};

const Intro: NextPage<Props> = ({ theme }) => {
  return (
    <div className="">
      <div className="flex justify-center items-center md:hidden">
        <Image
          src="/s_my_icon.jpeg"
          width={150}
          height={150}
          className="rounded-full"
          alt="Author Icon"
        />
      </div>
      <div className="justify-center items-center hidden md:flex">
        <Image
          src="/s_my_icon.jpeg"
          width={200}
          height={200}
          className="rounded-full"
          alt="Author Icon"
        />
      </div>
      <div className="w-fit mx-auto my-1">
        <SnsIntro theme={theme} snsType={SNS.GitHub} />
        <SnsIntro theme={theme} snsType={SNS.LinkedIn} />
      </div>
    </div>
  );
};

export default Intro;
