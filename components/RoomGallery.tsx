"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPhotoUrl } from "@/data/listings";

export const RoomGallery = ({ title, photos }: { title: string; photos: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const previous = () => setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
  const next = () => setActiveIndex((index) => (index + 1) % photos.length);

  return (
    <div className="relative grid h-[260px] grid-cols-2 gap-2 overflow-hidden rounded-xl bg-neutral-100 sm:h-[360px] md:h-[440px] md:grid-cols-4 md:grid-rows-2">
      {Array.from({ length: Math.min(photos.length, 5) }, (_, offset) => {
        const photo = photos[(activeIndex + offset) % photos.length];
        const main = offset === 0;
        return (
          <img
            key={`${photo}-${offset}`}
            alt={main ? title : `${title}, photo ${offset + 1}`}
            className={`${main ? "col-span-2 row-span-1 md:row-span-2" : "hidden md:block"} h-full w-full object-cover`}
            src={getPhotoUrl(photo, main ? 1500 : 800)}
          />
        );
      })}
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <button aria-label="Previous photo" className="grid h-9 w-9 place-items-center rounded-full bg-white/95 shadow-sm" onClick={previous} type="button"><ChevronLeft size={19} /></button>
        <button aria-label="Next photo" className="grid h-9 w-9 place-items-center rounded-full bg-white/95 shadow-sm" onClick={next} type="button"><ChevronRight size={19} /></button>
      </div>
      <span className="absolute bottom-3 right-3 rounded-md bg-black/65 px-2.5 py-1 text-xs font-medium text-white">{activeIndex + 1} / {photos.length}</span>
    </div>
  );
};