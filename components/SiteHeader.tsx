import Link from "next/link";
import { CircleUserRound, House, Menu } from "lucide-react";

export const SiteHeader = () => (
  <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
      <Link href="/" aria-label="Stayfinder home" className="flex items-center gap-2 text-[#ff385c]">
        <House size={27} strokeWidth={2.2} />
        <span className="hidden text-[21px] font-semibold tracking-tight sm:inline">stayfinder</span>
      </Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
        <Link href="/" className="border-b-2 border-neutral-900 py-3">Stays</Link>
        <Link href="/catalog" className="py-3 text-neutral-500 transition hover:text-neutral-900">Explore</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/catalog" className="hidden rounded-full px-4 py-3 text-sm font-medium transition hover:bg-neutral-100 md:block">Explore stays</Link>
        <button type="button" aria-label="Open account menu" className="flex h-11 items-center gap-3 rounded-full border border-neutral-300 px-2.5 text-neutral-600 transition hover:shadow-md">
          <Menu size={18} />
          <CircleUserRound size={27} strokeWidth={1.6} />
        </button>
      </div>
    </div>
  </header>
);