import profileImage from '../../../public/about.jpg'
import Image from 'next/image'
import { SectionTitle } from './SectionTitle'

export const AboutSection = () => {
  return (
    <section id="about" className='mb-24 text-gray-600 max-w-4xl mx-auto'>
      <SectionTitle>About</SectionTitle>
      <div className='flex justify-center items-center max-[600px]:flex-col mt-14 mx-4'>
        <Image
          src={profileImage}
          width={100}
          height={100}
          className='rounded-full mr-6'
          alt='profile image'
          />
        <div>
          <h5 className='font-semibold my-3'>KAKERU MIYAICHI</h5>
          <p>
            テキストテキストテキストテキストテキストテキストテキスト
            <br/>テキストテキストテキストテキストテキストテキストテキスト
            <br/>テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </section>
  )
}