import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function AboutPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36">
        <About />
      </div>
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
