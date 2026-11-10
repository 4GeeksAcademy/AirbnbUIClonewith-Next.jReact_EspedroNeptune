import type { Listing } from "@/types/listing";
import { ListingCard } from "@/components/ListingCard";

export const ListingGrid = ({ listings }: { listings: Listing[] }) => (
  <div className="grid grid-cols-1 gap-6 md:gap-8">
    {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
  </div>
);