"use client";

import { useEffect, useState } from "react";
import { CategoryFilters } from "@/components/CategoryFilters";
import { ListingGrid } from "@/components/ListingGrid";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { SearchBar } from "@/components/SearchBar";
import { listings as listingData } from "@/data/listings";
import type { FilterCategory, Listing } from "@/types/listing";

export const ListingExplorer = ({ title }: { title: string }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All stays");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListings(listingData);
      setLoading(false);
    }, 550);
    return () => window.clearTimeout(timer);
  }, []);

  const normalizedSearch = searchValue.trim().toLowerCase();
  const visibleListings = listings.filter((listing) => {
    const matchesSearch = `${listing.title} ${listing.location} ${listing.category}`.toLowerCase().includes(normalizedSearch);
    const matchesCategory = activeCategory === "All stays" || listing.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
      <div className="py-5 md:py-7">
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </div>
      <CategoryFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <section className="pt-7 md:pt-9">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight md:text-2xl">{title}</h1>
            <p className="mt-1 text-sm text-neutral-500">Places to feel at home, wherever you go.</p>
          </div>
          {!loading && <p className="hidden shrink-0 text-sm text-neutral-500 sm:block">{visibleListings.length} stays</p>}
        </div>
        {loading ? <LoadingIndicator /> : visibleListings.length ? <ListingGrid listings={visibleListings} /> : (
          <p className="rounded-xl border border-neutral-200 px-5 py-10 text-center text-sm text-neutral-600">No stays match that search. Try another destination or category.</p>
        )}
      </section>
    </main>
  );
};