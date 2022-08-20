import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import sampleImage1 from '../public/1.jpg'
import sampleImage2 from '../public/2.jpg'
import sampleImage3 from '../public/3.jpg'
import sampleImage4 from '../public/4.jpg'
import sampleImage5 from '../public/5.jpg'
import sampleImage6 from '../public/6.jpg'


const LineUp: FC = () => {
  return (
    <div className="m-4">
      <div className="grid grid-cols-1 bg-red-100 my-4">
        <Link href="#">
          <a>
            <Image src={sampleImage1} />
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 bg-red-100 my-4">
        <Link href="#">
          <a>
            <Image src={sampleImage2} />
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-red-100 my-4">
        <Link href="#">
          <a>
            <Image src={sampleImage3} objectFit={'contain'} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Image src={sampleImage4} objectFit={'cover'} />
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-red-100 my-4">
        <Link href="#">
          <a>
            <Image src={sampleImage5} objectFit={'fill'} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Image src={sampleImage6} objectFit={'fill'} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LineUp