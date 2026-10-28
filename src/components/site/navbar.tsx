import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "/destinations" },
  { label: "Add Destinations", href: "/add_destinations" },
  { label: "My Bookings", href: "/my-bookings" },
];

const authLinks = [
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/sign-up" },
];

export const Navbar = () => {
  return (
    <header className="grid h-14 grid-cols-2 items-center gap-4 bg-white px-6 md:grid-cols-[1fr_auto_1fr] md:px-8 md:h-16 ">
      <nav className="flex items-center gap-4 md:gap-7 ">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "text-[15px] whitespace-nowrap transition-colors hover:text-brand",
              link.active
                ? "border-b-2 border-brand pb-0.5 font-semibold text-brand"
                : "font-medium text-neutral-800",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/" className="hidden justify-self-center text-[26px] text-brand md:block">
        <span className="font-bold">Wander</span>
        <span className="font-light">last</span>
      </Link>

      <div className="flex items-center justify-self-end gap-4 md:gap-7">
        <Link
          href="/profile"
          className="flex items-center gap-1.5 text-[15px] font-medium text-neutral-800 transition-colors hover:text-brand"
        >
          <User className="size-4" /> Profile
        </Link>
        {authLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[15px] font-medium text-neutral-800 transition-colors hover:text-brand"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
