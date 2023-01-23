import { NextPage } from 'next';
import Image from 'next/legacy/image';

type Props = {
  theme: string;
  icon: IconImage;
  title: string;
  children: JSX.Element;
  from_date: string;
  to_date?: string;
  url: string;
  isDone?: boolean;
};

export enum IconImage {
  SCHOOL,
  COMPANY,
}

export const Time: NextPage<Props> = ({
  theme,
  icon,
  title,
  children,
  from_date,
  to_date,
  url,
}) => {
  return (
    <div className="mb-5">
      <div className="flex items-center lg:w-11/12">
        <div className="bg-white z-10 rounded-full border-4 border-black h-5 w-5 relative" />
        <div
          className={`bg-white ${
            to_date !== 'Present'
              ? ''
              : ' animate-ping z-10 rounded-full h-5 w-5 absolute'
          } `}
        />
        <div className="flex-1 ml-4 z-10 font-medium">
          <div className="order-1 space-y-2 rounded-lg shadow-only transition-ease px-3 py-2 md:px-6 md:py-4 border-4 border-dotted border-black dark:border-white">
            <a
              className="mb-3 font-bold text-xl md:text-2xl hover:opacity-50"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">
                <Image
                  src={`/bio/${theme === 'dark' ? 'white_' : 'black_'}${
                    icon === IconImage.SCHOOL ? 'school' : 'company'
                  }.svg`}
                  width={20}
                  height={20}
                  alt="Place Icon"
                />
              </span>
              <div className="inline">{title}</div>
            </a>
            <div className=" text-sm">{`${from_date} ${
              to_date === '' ? '' : `- ${to_date}`
            }`}</div>
            <div className="text-sm font-medium leading-snug tracking-wide whitespace-pre-wrap">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
