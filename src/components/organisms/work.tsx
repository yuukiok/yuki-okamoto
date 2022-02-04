import { NextPage } from 'next'
import Image from 'next/image'
const Work: React.FC<any> = ({ work }) => {
  console.log(work)
  // const imageInfo = work.image.documentInStages
  return (
    <>
      {/* <Image
        src={imageInfo.url}
        width={imageInfo.width}
        height={imageInfo.height}
      /> */}
      {/* <div>{work}</div> */}
    </>
  )
}

export default Work
