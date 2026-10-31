import type { Destination } from "@/components/site/destination-card";
import EditDestinationDialog from "@/components/site/EditDestinationDialog";
import DeleteDestination from "@/components/site/DeleteDestination";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Star,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingCard from "@/components/booking/BookingCard";

const DestinationDetailsPage = async ({
  params,
}: PageProps<"/destinations/[id]">) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const data: { result: Destination } = await res.json();

  if (!data.result) {
    notFound();
  }

  const destination = data.result;
  const price = Number(destination.price);
  const formattedPrice = Number.isFinite(price)
    ? price.toLocaleString("en-US")
    : destination.price;

  const departureDate = new Date(`${destination.departureDate}T00:00:00`);
  const formattedDate = Number.isNaN(departureDate.getTime())
    ? destination.departureDate
    : departureDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:px-12 md:py-14">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-3">
          <EditDestinationDialog destination={destination} />
          <DeleteDestination id={destination._id} />
        </div>
      </div>

      <div className="relative mt-6 aspect-[16/7] overflow-hidden rounded-md bg-neutral-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="size-full object-cover"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
        <section>
          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            <MapPin className="size-3.5 shrink-0" />
            {destination.country}
          </p>

          <h1 className="mt-2 font-display text-4xl leading-tight text-neutral-900 md:text-5xl">
            {destination.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <p className="flex items-center gap-1.5 font-semibold text-neutral-900">
              <Star className="size-4 fill-emerald-600 text-emerald-600" />
              4.5
            </p>
            <p className="flex items-center gap-1.5 text-neutral-500">
              <CalendarDays className="size-4 shrink-0" />
              {destination.duration}
            </p>
          </div>

          <h2 className="mt-8 font-display text-2xl text-neutral-900">
            Overview
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
            {destination.description}
          </p>
        </section>

        {/* aside */}
        <BookingCard
          formattedPrice={formattedPrice}
          formattedDate={formattedDate}
        />
      </div>
    </main>
  );
};

export default DestinationDetailsPage;
