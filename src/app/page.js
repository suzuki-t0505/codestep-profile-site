import Image from 'next/image'
import { AboutSection } from './components/AboutSection'
import { BicycleSection } from './components/BicycleSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MainVisual } from './components/MainVisual'

export default function Home() {
  return (
    <main>
      <Header />
      <MainVisual />
      <AboutSection />
      <BicycleSection />
      <Footer />
    </main>
  )
}
