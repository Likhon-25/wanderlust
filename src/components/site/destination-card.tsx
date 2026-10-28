import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";

export type Destination = {
  _id: string;
  name: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};

export function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  const price = Number(destination.price);
  const formattedPrice = Number.isFinite(price)
    ? price.toLocaleString("en-US")
    : destination.price;

  return (
    <article className="flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-neutral-200">
        {/* Destination images come from arbitrary external hosts, so the optimizer can't be used. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.imageUrl}
          alt={destination.name}
          loading="lazy"
          className="size-full object-cover"
        />

        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white px-2 py-1 text-xs text-neutral-900">
          4.5
          <Star className="size-3.5 fill-neutral-900 text-neutral-900" />
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="flex items-center gap-1.5 text-xs text-neutral-500">
          <MapPin className="size-3.5 shrink-0" />
          {destination.country}
        </p>

        <div className="mt-1.5 flex items-baseline justify-between gap-3">
          <h3 className="text-lg leading-snug font-semibold text-neutral-900">
            {destination.name}
          </h3>
          <p className="shrink-0 text-neutral-900">
            <span className="text-xl font-semibold">${formattedPrice}</span>
            <span className="text-sm text-neutral-500">/Person</span>
          </p>
        </div>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-500">
          <CalendarDays className="size-3.5 shrink-0" />
          {destination.duration}
        </p>

        <a
          href={`/destinations/${destination._id}`}
          className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-brand uppercase transition-colors hover:text-brand/80"
        >
          Book Now
          <ArrowUpRight className="size-4" strokeWidth={1.8} />
        </a>
      </div>
    </article>
  );
}
