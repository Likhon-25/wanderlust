import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/image/Banner.png";

const searchFields = [
  { id: "location", label: "Location", placeholder: "Address, City Or Zip" },
  { id: "date-duration", label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { id: "budget", label: "Budget", placeholder: "$0-$3000" },
  { id: "people", label: "People", placeholder: "5-10" },
];

export function Banner() {
  return (
    <section className="relative flex min-h-[580px] flex-col overflow-hidden bg-neutral-800">
      {/* Background image with dark overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40"
      />

      {/* Hero content */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-12 text-center">
        <h1 className="font-display text-[54px] leading-[1.12] font-light text-white sm:text-[64px] md:text-[70px]">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-8 max-w-[550px] text-[15px] leading-[1.85] text-white/90">
          Explore breathtaking destinations and create unforgettable memories with
          our curated travel experiences.
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-2">
          <a
            href="/destinations"
            className="inline-flex h-12 items-center gap-3 bg-brand px-8 text-sm font-medium tracking-wider text-white uppercase transition-colors hover:bg-brand/90"
          >
            Explore Now <ArrowRight className="size-4" strokeWidth={1.8} />
          </a>
          <a
            href="/destinations"
            className="inline-flex h-12 items-center bg-white/45 px-8 text-sm font-medium tracking-wider text-white uppercase transition-colors hover:bg-white/55"
          >
            View Destination
          </a>
        </div>
      </div>

      {/* Bottom search bar */}
      <form className="relative grid grid-cols-1 border-t border-white/25 bg-white/15 text-white backdrop-blur-sm sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_0.65fr]">
        {searchFields.map((field, index) => (
          <div
            key={field.id}
            className={cn(
              "px-6 py-4 text-left",
              index > 0 && "sm:border-l sm:border-white/25",
            )}
          >
            <label htmlFor={field.id} className="block text-[17px] font-bold">
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type="text"
              placeholder={field.placeholder}
              className="mt-1 w-full bg-transparent text-[13px] text-white/90 outline-none placeholder:text-white/70"
            />
          </div>
        ))}
        <button
          type="submit"
          className="flex items-center justify-center bg-brand text-[17px] font-bold transition-colors hover:bg-brand/90"
        >
          Search
        </button>
      </form>
    </section>
  );
}
