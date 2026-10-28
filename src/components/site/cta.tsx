import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background image with dark overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/image/CTA.png)" }}
      />
      <div aria-hidden className="absolute inset-0 bg-black/40" />

      <div className="relative px-4 text-center">
        <h2 className="font-display text-[36px] leading-tight text-white md:text-[44px]">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-[15px] text-white/85">
          Join thousands of travelers who have discovered the world with us
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/destinations"
            className="inline-flex h-10 items-center gap-2.5 bg-[#f5f2ea] px-6 text-[13px] font-medium tracking-wide text-neutral-900 uppercase transition-colors hover:bg-white"
          >
            Book Your Trip Today
            <ArrowRight className="size-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
