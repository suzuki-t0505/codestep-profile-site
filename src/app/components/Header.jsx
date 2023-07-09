import logo from '../../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex justify-between items-center mx-10'>
      <h1 className='py-4'>
        <Image
          src={logo}
          width={120}
          height={60}
          alt='profile my log'
        />
      </h1>

      <nav>
        <ul className='flex gap-6'>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#bicycle">Bicycle</Link></li>
        </ul>
      </nav>
    </header>
  )
}