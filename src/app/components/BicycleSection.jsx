import image1 from '../../../public/bicycle1.jpg'
import image2 from '../../../public/bicycle2.jpg'
import image3 from '../../../public/bicycle3.jpg'
import Image from 'next/image'
import { SectionTitle } from './SectionTitle'
import { useMemo } from 'react'

export const BicycleSection = () => {
  const contents = useMemo(() => [
    {
      image: image1,
      title: 'タイトルタイトル',
      body: 'テキストテキストテキスト'
    },
    {
      image: image2,
      title: 'タイトルタイトル',
      body: 'テキストテキストテキスト'
    },
    {
      image: image3,
      title: 'タイトルタイトル',
      body: 'テキストテキストテキスト'
    },
  ], [])
  return (
    <section id="bicycle" className='mb-24 text-gray-600 max-w-4xl mx-auto'>
      <SectionTitle>Bicycle</SectionTitle>
      <ul className='flex justify-center items-center max-[600px]:flex-col mt-14 mx-4 text-center gap-4'>
        {
          contents.map(content => {
            return (
              <li>
                <Image src={content.image} alt='content image' />
                <h5 className='font-semibold my-3'>{content.title}</h5>
                <p>{content.body}</p>
              </li>
            )
          })
        }
    </ul>
    </section>
  )
}