"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import type { Destination } from "@/components/site/destination-card";
import { Input } from "../ui/input";
import { date, email } from "better-auth";
import { username } from "better-auth/plugins";
import { authClient } from "@/lib/auth-client";

const perks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

type BookingCardProps = {
  destination: Destination;
};

const BookingCard = ({ destination }: BookingCardProps) => {
  const {data : session} = authClient.useSession();
  const user = session?.user;

  const price = Number(destination.price);
  const formattedPrice = Number.isFinite(price)
    ? price.toLocaleString("en-US")
    : destination.price;

  const handleBooking =async (e) => {
    e.preventDefault();

    const departureDate = e.target.departureDate.value
    
    const data = {
      username: user?.name,
      email: user?.email,
      image: user?.image,
      ...destination,
      departureDate: departureDate,
      bookingDate: new Date()
    }
    const res = await fetch ('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    const bookingRes = await res.json()
    console.log(bookingRes);
  };
  return (
    <aside className="h-fit rounded-md border border-neutral-200 p-4 lg:sticky lg:top-8">
      <p className="text-xs text-neutral-500">Starting from</p>
      <p className="mt-1 text-2xl font-semibold text-brand">
        ${formattedPrice}
      </p>
      <p className="text-xs text-neutral-500">per person</p>
      <form onSubmit={handleBooking}>
        <Input
          type="date"
          name="departureDate"
          aria-label="Departure date"
          defaultValue={destination.departureDate}
        />
        <Button
          type="submit"
          className="mt-4 w-full bg-brand text-white hover:bg-brand/90"
        >
          Book Now
          <ArrowRight />
        </Button>
      </form>

      <ul className="mt-4 space-y-2">
        {perks.map((perk) => (
          <li
            key={perk}
            className="flex items-center gap-2 text-xs text-neutral-600"
          >
            <Check className="size-3.5 shrink-0 text-emerald-600" />
            {perk}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BookingCard;
