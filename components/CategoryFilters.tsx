"use client";

import { Building2, Droplets, House, Sparkles, Tent, Trees, Waves, type LucideIcon } from "lucide-react";
import type { FilterCategory, ListingCategory } from "@/types/listing";

const categories: { label: FilterCategory; Icon: LucideIcon }[] = [
  { label: "All stays", Icon: House },
  { label: "Beach", Icon: Waves },
  { label: "Cabins", Icon: Tent },
  { label: "Design", Icon: Sparkles },
  { label: "Countryside", Icon: Trees },
  { label: "Pools", Icon: Droplets },
  { label: "City", Icon: Building2 },
];

interface CategoryFiltersProps {
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

export const CategoryFilters = ({ activeCategory, onCategoryChange }: CategoryFiltersProps) => (
  <nav aria-label="Filter by category" className="-mx-4 flex gap-7 overflow-x-auto px-4 pb-1 md:mx-0 md:gap-9 md:px-0">
    {categories.map(({ label, Icon }) => {
      const active = activeCategory === label;
      return (
        <button
          key={label}
          aria-pressed={active}
          className={`group flex min-w-fit flex-col items-center gap-2 border-b-2 pb-3 text-xs font-medium transition ${active ? "border-neutral-900 text-neutral-900" : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-900"}`}
          onClick={() => onCategoryChange(label)}
          type="button"
        >
          <Icon size={21} strokeWidth={1.7} />
          {label}
        </button>
      );
    })}
  </nav>
);