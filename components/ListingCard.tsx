import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { getPhotoUrl } from "@/data/listings";
import type { Listing } from "@/types/listing";

export const ListingCard = ({ listing }: { listing: Listing }) => (
  <Link href={`/rooms/${listing.id}`} className="group flex flex-col gap-3 md:flex-row md:gap-6">
    <div className="relative aspect-[1.18] overflow-hidden rounded-xl bg-neutral-100 md:aspect-[1.28] md:w-[290px] md:shrink-0">
      <img
        alt={listing.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        src={getPhotoUrl(listing.photos[0], 900)}
      />
      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold shadow-sm">Guest favorite</span>
      <span aria-hidden="true" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/20 text-white">
        <Heart fill="currentColor" size={17} strokeWidth={1.7} />
      </span>
    </div>
    <div className="flex min-w-0 flex-1 flex-col justify-between pb-3 md:py-1 md:pb-2">
      <div>
        <div className="flex items-start justify-between gap-3">
          <p className="truncate text-sm text-neutral-600">{listing.location}</p>
          <span className="flex shrink-0 items-center gap-1 text-sm">
            <Star aria-hidden="true" fill="currentColor" size={14} strokeWidth={0} />
            {listing.rating.toFixed(2)}
          </span>
        </div>
        <h2 className="mt-1 text-base font-medium leading-6 text-neutral-900">{listing.title}</h2>
        <p className="mt-1 text-sm text-neutral-500">{listing.bedrooms} bedroom{listing.bedrooms === 1 ? "" : "s"} · {listing.beds} beds · {listing.bathrooms} bath</p>
      </div>
      <p className="mt-3 text-sm text-neutral-700"><span className="font-semibold text-neutral-900">${listing.pricePerNight}</span> per night</p>
    </div>
  </Link>
);