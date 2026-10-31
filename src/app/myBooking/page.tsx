import MyBookingCard from '@/components/booking/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const MyBookingPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user

    let bookings = [];

    if (user?.email) {
        const res = await fetch(
            `http://localhost:5000/my-bookings/${encodeURIComponent(user.email)}`,
            { cache: "no-store" }
        );

        if (res.ok) {
            bookings = await res.json();
        }
    }

    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:px-12 md:py-14">
            <header>
                <h1 className="font-display text-4xl leading-tight text-neutral-900 md:text-[44px]">
                    My Bookings
                </h1>
                <p className="mt-2 text-sm text-neutral-500">
                    Manage and view your upcoming travel plans
                </p>
            </header>
            <MyBookingCard bookings={bookings} />
        </main>
    );
};

export default MyBookingPage;