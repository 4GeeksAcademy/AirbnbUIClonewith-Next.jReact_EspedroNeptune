import { MapPin, Star } from "lucide-react";
import type { Listing } from "@/types/listing";

export const RoomHeader = ({ listing }: { listing: Listing }) => (
  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h1 className="text-xl font-semibold leading-7 tracking-tight sm:text-2xl">{listing.title}</h1>
      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <span className="inline-flex items-center gap-1"><Star aria-hidden="true" fill="currentColor" size={14} strokeWidth={0} /> {listing.rating.toFixed(2)} <span className="text-neutral-500">({listing.reviewCount} reviews)</span></span>
        <span className="inline-flex items-center gap-1 text-neutral-600"><MapPin size={14} /> {listing.location}</span>
      </p>
    </div>
    <button className="hidden text-sm font-medium underline underline-offset-2 sm:block" type="button">Share</button>
  </div>
);