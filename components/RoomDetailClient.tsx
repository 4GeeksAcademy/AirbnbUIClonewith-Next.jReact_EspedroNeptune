"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";
import { BookingCard } from "@/components/BookingCard";
import { HostInfo } from "@/components/HostInfo";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { RoomGallery } from "@/components/RoomGallery";
import { RoomHeader } from "@/components/RoomHeader";
import { listings } from "@/data/listings";
import type { Listing } from "@/types/listing";

export const RoomDetailClient = ({ id }: { id: string }) => {
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setListing(null);
    setLoading(true);
    const timer = window.setTimeout(() => {
      setListing(listings.find((item) => item.id === id) ?? null);
      setLoading(false);
    }, 450);
    return () => window.clearTimeout(timer);
  }, [id]);

  if (loading) return <LoadingIndicator />;
  if (!listing) return (
    <main className="mx-auto max-w-4xl px-4 py-20 text-center">
      <h1 className="text-2xl font-semibold">This stay could not be found</h1>
      <Link className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4" href="/catalog"><ArrowLeft size={16} /> Back to stays</Link>
    </main>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-5 md:px-8 md:pt-8">
      <Link className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-950" href="/catalog"><ArrowLeft size={16} /> Back to stays</Link>
      <RoomHeader listing={listing} />
      <div className="mt-5"><RoomGallery title={listing.title} photos={listing.photos} /></div>
      <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.8fr)] md:gap-12">
        <div>
          <p className="border-b border-neutral-200 pb-6 text-sm leading-6 text-neutral-600">{listing.description}</p>
          <HostInfo listing={listing} />
          <AmenitiesGrid listing={listing} />
        </div>
        <aside><BookingCard listing={listing} /></aside>
      </div>
    </main>
  );
};