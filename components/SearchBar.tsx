import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <label className="mx-auto flex h-14 w-full max-w-3xl items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 shadow-sm transition focus-within:border-neutral-400 focus-within:shadow-md md:h-[66px] md:px-6">
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ff385c] text-white">
      <Search size={18} strokeWidth={2.5} />
    </span>
    <span className="min-w-0 flex-1">
      <span className="block text-[11px] font-semibold leading-4 text-neutral-900">Where</span>
      <input
        aria-label="Search destinations and stays"
        className="w-full bg-transparent text-sm leading-5 text-neutral-700 outline-none placeholder:text-neutral-500"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search destinations or homes"
        type="search"
        value={value}
      />
    </span>
    <span className="hidden h-8 w-px bg-neutral-200 sm:block" />
    <span className="hidden pr-2 text-xs text-neutral-500 sm:block">Anywhere, anytime</span>
  </label>
);