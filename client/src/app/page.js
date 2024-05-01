// import Image from 'next/image';
import Hero from './Hero'
import Navbar from './components/Navbar'
import FeaturedCars from './FeaturedCars'
import Highlights from './Highlights'
import Footer from './components/Footer'
import Offers from './components/Offers'
import Testimonials from './components/Testimonials'
import Features from './Features'
import Faq from './components/Faq'
import Contact from './components/Contact'
import { homeFAQ } from './data/homeFAQs'

export default async function Home() {
  const data = await fetch(
    `https://real-value-server.vercel.app/api/listings/featured`,
    { cache: 'no-store' },
  ).then((res) => res.json())

  return (
    <div>
      <Hero />
      <FeaturedCars featuredCarData={data} />
      <Features />
      <Offers />
      <Highlights />
      <Faq FAQs={homeFAQ} title="Buy" />
      <Testimonials />
      <Contact />
    </div>
  )
}
