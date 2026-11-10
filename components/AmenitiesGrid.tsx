import { Car, CookingPot, Dumbbell, Flame, Mountain, Trees, Tv, Waves, Wind, Wifi, type LucideIcon } from "lucide-react";
import type { AmenityIcon, Listing } from "@/types/listing";

const amenityIcons: Record<AmenityIcon, LucideIcon> = {
  Wifi, Waves, CookingPot, Car, Tv, Wind, Trees, Flame, Mountain, Dumbbell,
};

export const AmenitiesGrid = ({ listing }: { listing: Listing }) => (
  <section className="border-b border-neutral-200 py-6">
    <h2 className="text-lg font-semibold">What this place offers</h2>
    <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
      {listing.amenities.map(({ label, icon }) => {
        const Icon = amenityIcons[icon];
        return <li key={label} className="flex items-center gap-3 text-sm text-neutral-700"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /><span>{label}</span></li>;
      })}
    </ul>
  </section>
);