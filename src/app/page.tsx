import { Banner } from "@/components/site/banner";
import { CallToAction } from "@/components/site/cta";
import { Testimonials } from "@/components/site/testimonials";
import { WhyChoose } from "@/components/site/why-choose";

const Home = () => {
  return (
    <>
      <Banner />
      <WhyChoose />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;
