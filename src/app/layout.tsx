import type { Metadata } from "next";
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  // variable: "--font-josefin-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Wanderlast | Discover Your Next Adventure",
  description: "Curated travel experiences — explore breathtaking destinations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${josefinSans.className} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
