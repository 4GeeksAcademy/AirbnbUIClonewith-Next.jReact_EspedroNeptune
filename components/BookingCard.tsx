"use client";

import { useState } from "react";
import { Minus, Plus, Star } from "lucide-react";
import type { Listing } from "@/types/listing";

export const BookingCard = ({ listing }: { listing: Listing }) => {
  const [guests, setGuests] = useState(1);
  const maxGuests = Math.min(8, listing.maxGuests);

  return (
    <section className="rounded-xl border border-neutral-200 p-5 shadow-[0_6px_24px_rgba(0,0,0,0.08)] md:sticky md:top-28">
      <div className="flex items-center justify-between gap-3">
        <p><span className="text-xl font-semibold">${listing.pricePerNight}</span><span className="text-sm text-neutral-600"> / night</span></p>
        <span className="flex items-center gap-1 text-sm"><Star aria-hidden="true" fill="currentColor" size={14} strokeWidth={0} /> {listing.rating.toFixed(2)}</span>
      </div>
      <div className="mt-5 rounded-lg border border-neutral-300 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">Guests</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm">{guests} guest{guests === 1 ? "" : "s"} <span className="text-neutral-500">· up to {maxGuests}</span></span>
          <div className="flex items-center gap-3">
            <button aria-label="Remove one guest" className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 disabled:opacity-40" disabled={guests <= 1} onClick={() => setGuests((count) => Math.max(1, count - 1))} type="button"><Minus size={15} /></button>
            <button aria-label="Add one guest" className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 disabled:opacity-40" disabled={guests >= maxGuests} onClick={() => setGuests((count) => Math.min(maxGuests, count + 1))} type="button"><Plus size={15} /></button>
          </div>
        </div>
      </div>
      <button className="mt-4 w-full rounded-lg bg-[#e61e4d] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d91444]" type="button">Reserve</button>
      <p className="mt-3 text-center text-xs text-neutral-500">You won’t be charged yet</p>
    </section>
  );
};