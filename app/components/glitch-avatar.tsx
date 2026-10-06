import Image from "next/image";

const SRC = "/deadeye.webp";
// Shared by the intro and the avatar so both resolve to the same image URL (one download).
const SIZES = "240px";

// Radius is a percentage so it scales with the logo during the intro morph.
export function GlitchImage({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <div
      className={`glitch relative aspect-square overflow-hidden rounded-[14%] bg-card ring-1 ring-white/10 shadow-[0_0_60px_-14px_var(--live)] ${className}`}
    >
      <Image src={SRC} alt={alt} fill priority sizes={SIZES} className="glitch-base object-cover" />
      <Image src={SRC} alt="" aria-hidden fill sizes={SIZES} className="glitch-layer glitch-layer-a object-cover" />
      <Image src={SRC} alt="" aria-hidden fill sizes={SIZES} className="glitch-layer glitch-layer-b object-cover" />
    </div>
  );
}

export default function GlitchAvatar() {
  return (
    <div data-logo-target className="w-28 sm:w-32">
      <GlitchImage alt="DEADEYE — official logo of Safal Gautam" />
    </div>
  );
}
