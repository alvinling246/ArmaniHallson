import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { LinkBridge } from '../components/LinkBridge';
import { VirtualTour } from '../components/VirtualTour';
import { Facilities } from '../components/Facilities';
import { UnitTypes } from '../components/UnitTypes';
import { Location } from '../components/Location';
import { LeadCapture } from '../components/LeadCapture';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <section className="scroll-snap-align-start">
        <Hero />
      </section>
      <section className="scroll-snap-align-start">
        <About />
      </section>
      <section className="scroll-snap-align-start">
        <LinkBridge />
      </section>
      <section className="scroll-snap-align-start">
        <VirtualTour />
      </section>
      <section id="facilities" className="scroll-snap-align-start">
        <Facilities />
      </section>
      <section id="unit-types" className="scroll-snap-align-start">
        <UnitTypes />
      </section>
      <section className="scroll-snap-align-start">
        <Location />
      </section>
      <section id="lead-capture" className="scroll-snap-align-start">
        <LeadCapture />
      </section>
      <section className="scroll-snap-align-start">
        <Footer />
      </section>
    </>
  );
}
