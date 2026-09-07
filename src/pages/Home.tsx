import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import SaaSProduct from '../components/SaaSProduct';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <SaaSProduct />
      <Portfolio />
      <About />
      <Testimonials />
      <WhyUs />
      <CTA />
    </>
  );
}
