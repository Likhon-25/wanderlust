import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    country: "Singapore",
    image: "/image/person2.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    country: "New York, USA",
    image: "/image/person1.png",
  },
  {
    quote:
      '"Kyoto In Spring Was An Absolute Dream. Every Temple, Every Garden And Every Meal Was Worth The Journey. Simply Perfect From Start To Finish."',
    name: "Emma Williams",
    country: "London, UK",
    image: "/image/person1.png",
  },
  {
    quote:
      '"Safari In Tanzania Was Beyond Anything We Imagined. Every Detail Was Handled For Us And The Wildlife Encounters Were Truly Once In A Lifetime."',
    name: "James Miller",
    country: "Sydney, Australia",
    image: "/image/person2.png",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-white pt-11 pb-24">
      <div className="mx-auto max-w-[888px] px-4">
        <Carousel>
          {/* Header: title left, prev/next controls right */}
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-[40px] leading-tight text-neutral-900">
                What Travelers Say
              </h2>
              <p className="mt-2.5 text-sm text-neutral-600">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <CarouselPrevious className="static size-9 bg-white text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700" />
              <CarouselNext className="static size-9 bg-white text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-6 md:basis-1/2"
              >
                <div className="flex h-full justify-between gap-4 border border-neutral-200 bg-white p-4">
                  <div className="flex flex-1 flex-col">
                    <p className="text-[15px] leading-[1.55] text-neutral-900">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto pt-8">
                      <p className="text-[15px] text-brand">
                        — {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={144}
                    height={172}
                    className="w-36 shrink-0 self-stretch object-cover object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
