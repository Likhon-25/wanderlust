import { Banner } from "@/components/site/banner";
import { CallToAction } from "@/components/site/cta";
import { Testimonials } from "@/components/site/testimonials";
import { WhyChoose } from "@/components/site/why-choose";

export default function Home() {
  return (
    <>
      <Banner />
      <WhyChoose />
      <Testimonials />
      <CallToAction />
    </>
  );
}
