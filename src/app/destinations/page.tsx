import { ChevronDown } from "lucide-react";
import {
  DestinationCard,
  type Destination,
} from "@/components/site/destination-card";

const filterLabels = ["Category", "Price Range", "Sort By"];

export default async function DestinationsPage() {
  let destinations: Destination[] = [];
  let hasError = false;

  try {
    const res = await fetch("http://localhost:5000/destinations", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to load destinations: ${res.status}`);
    }

    destinations = await res.json();
  } catch (error) {
    console.error(error);
    hasError = true;
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 md:px-12 md:py-16">
      <h1 className="font-display text-4xl leading-tight text-neutral-900 md:text-5xl">
        Explore All Destinations
      </h1>
      <p className="mt-3 text-[15px] text-[#6C696D]">
        Find your perfect travel experience from our curated collection
      </p>

      <div className="mt-8 grid divide-y divide-neutral-200 overflow-hidden rounded-md border border-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {filterLabels.map((label) => (
          <div
            key={label}
            className="flex h-12 items-center justify-between px-4 text-sm tracking-wide text-neutral-500 uppercase"
          >
            {label}
            <ChevronDown className="size-4 text-neutral-400" />
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm text-neutral-500">
        Showing {destinations.length}{" "}
        {destinations.length === 1 ? "destination" : "destinations"}
      </p>

      {hasError ? (
        <p className="mt-10 rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          We couldn&apos;t load destinations right now. Please make sure the API
          is running and try again.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      )}
    </main>
  );
}
