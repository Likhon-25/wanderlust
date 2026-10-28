import Image from "next/image";

const features = [
  {
    icon: "/image/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/image/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/image/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="bg-[#e6f6f9] py-24">
      <div className="mx-auto max-w-[960px] px-4">
        <div className="text-center">
          <h2 className="font-display text-[36px] leading-tight text-neutral-900 md:text-[40px]">
            Why Choose Wanderlust
          </h2>
          <p className="mt-5 text-sm text-neutral-600">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-7">
              <Image
                src={feature.icon}
                alt=""
                width={30}
                height={30}
                className="size-[30px]"
              />
              <h3 className="mt-5 font-display text-xl text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.6] text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
