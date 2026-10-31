'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    CalendarDays,
    CircleCheck,
    Clock3,
    Eye,
    MapPin,
    Trash2,
} from "lucide-react";

type Booking = {
    _id?: string;
    bookingId?: string;
    booking_id?: string;
    name?: string;
    title?: string;
    country?: string;
    imageUrl?: string;
    image?: string;
    price?: string | number;
    departureDate?: string;
    date?: string;
    status?: string;
};

type MyBookingCardProps = {
    bookings: Booking[];
};

const formatDate = (value?: string) => {
    if (!value) return "Date not available";

    const dateOnly = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (dateOnly) {
        const date = new Date(
            Number(dateOnly[1]),
            Number(dateOnly[2]) - 1,
            Number(dateOnly[3])
        );
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

const MyBookingCard = ({ bookings }: MyBookingCardProps) => {
    const router = useRouter();

    if (!bookings.length) {
        return (
            <div className="mt-10 rounded-md border border-neutral-200 py-16 text-center">
                <p className="font-display text-2xl text-neutral-900">No bookings yet</p>
                <Link
                    href="/destinations"
                    className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand/80"
                >
                    Explore destinations
                </Link>
            </div>
        );
    }

    const handleCancelBooking = async (id: string) => {
        const res = await fetch(`http://localhost:5000/my-bookings/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        if (!res.ok) {
            console.error(data.message ?? "Booking cancellation failed");
            return;
        }

        router.refresh();
    };

    return (
        <div className="mt-10 space-y-5">
            {bookings.map((booking, index) => {
                const id = booking._id ?? booking.bookingId ?? booking.booking_id ?? String(index);
                const title = booking.name ?? booking.title ?? "Unnamed destination";
                const image = booking.imageUrl ?? booking.image ?? "/image/destinations/image1.png";
                const departureDate = booking.departureDate ?? booking.date;
                const rawStatus = booking.status ?? "Confirmed";
                const status = rawStatus.toLowerCase();
                const isPending = status.includes("pending");
                const price = Number(booking.price);
                const displayPrice = Number.isFinite(price)
                    ? `$${price.toLocaleString("en-US")}`
                    : booking.price
                      ? `$${booking.price}`
                      : "Price unavailable";

                return (
                    <article
                        key={id}
                        className="grid grid-cols-1 overflow-hidden rounded-md border border-neutral-200 bg-white md:grid-cols-[255px_1fr]"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={image}
                            alt={title}
                            className="h-44 w-full object-cover md:h-full md:min-h-[180px]"
                        />

                        <div className="flex flex-col p-5 md:flex-row md:items-end md:justify-between md:p-6">
                            <div>
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${
                                        isPending
                                            ? "bg-orange-50 text-orange-500"
                                            : "bg-emerald-50 text-emerald-600"
                                    }`}
                                >
                                    {isPending ? (
                                        <Clock3 className="size-3.5" />
                                    ) : (
                                        <CircleCheck className="size-3.5" />
                                    )}
                                    {isPending ? "Pending" : "Confirmed"}
                                </span>

                                <h2 className="mt-2 font-display text-xl font-semibold text-neutral-900 md:text-2xl">
                                    {title}
                                </h2>

                                <p className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                                    <CalendarDays className="size-3.5" />
                                    Departure: {formatDate(departureDate)}
                                </p>
                                <p className="mt-1.5 flex items-center gap-2 text-xs text-neutral-500">
                                    <MapPin className="size-3.5" />
                                    Booking ID: {booking.bookingId ?? booking.booking_id ?? id}
                                </p>
                                <p className="mt-2 text-xl font-semibold text-brand">{displayPrice}</p>
                            </div>

                            <div className="mt-4 flex gap-2 md:mt-0">
                                <button
                                    onClick={() => handleCancelBooking(id)}
                                    type="button"
                                    className="inline-flex h-10 items-center gap-2 rounded-sm border border-red-200 px-4 text-xs font-semibold text-red-500 transition-colors hover:bg-red-50"
                                >
                                    <Trash2 className="size-3.5" />
                                    Cancel
                                </button>
                                <Link
                                    href={`/destinations/${booking._id ?? ""}`}
                                    className="inline-flex h-10 items-center gap-2 rounded-sm bg-brand px-4 text-xs font-semibold text-white transition-colors hover:bg-brand/90"
                                >
                                    <Eye className="size-3.5" />
                                    View
                                </Link>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default MyBookingCard;