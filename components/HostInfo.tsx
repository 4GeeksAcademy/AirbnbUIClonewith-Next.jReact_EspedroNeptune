import type { Listing } from "@/types/listing";

export const HostInfo = ({ listing }: { listing: Listing }) => (
  <div className="flex items-center gap-4 border-b border-neutral-200 py-6">
    <div aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-full bg-rose-100 text-lg font-semibold text-[#c1354c]">{listing.host.initials}</div>
    <div>
      <p className="font-medium">Hosted by {listing.host.name}</p>
      <p className="mt-1 text-sm text-neutral-500">{listing.host.yearsHosting} years hosting</p>
    </div>
  </div>
);