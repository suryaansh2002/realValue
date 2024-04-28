// import Image from 'next/image';
import Hero from './Hero';
import Navbar from './components/Navbar';
import FeaturedCars from './FeaturedCars';
import Highlights from './Highlights';
import Footer from './components/Footer';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import Features from './Features';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCars />
      <Features />
      <Highlights />
      <Offers />
      <Testimonials />
    </div>
  );
}
