import img from '../../../public/mainvisual.jpg'
import Image from 'next/image'

export const MainVisual = () => {
  return (
    <section className='mb-20'>
      <Image
        src={img}
        className='h-[37.5rem] object-cover'
        alt='Main visual image'
      />
    </section>
  )
}