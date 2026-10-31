import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const perks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

type BookingCardProps = {
  formattedPrice: string;
  formattedDate: string;
};

const BookingCard = ({
  formattedPrice,
  formattedDate,
}: BookingCardProps) => {
  return (
    <aside className="h-fit rounded-md border border-neutral-200 p-4 lg:sticky lg:top-8">
      <p className="text-xs text-neutral-500">Starting from</p>
      <p className="mt-1 text-2xl font-semibold text-brand">
        ${formattedPrice}
      </p>
      <p className="text-xs text-neutral-500">per person</p>

      <p className="mt-5 rounded-md bg-muted px-3 py-2.5 text-sm text-neutral-700">
        {formattedDate}
      </p>

      <Button
        type="button"
        className="mt-4 w-full bg-brand text-white hover:bg-brand/90"
      >
        Book Now
        <ArrowRight />
      </Button>

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