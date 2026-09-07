import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function WorkPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36">
        <Portfolio />
      </div>
      <Testimonials />
      <CTA />
    </>
  );
}
