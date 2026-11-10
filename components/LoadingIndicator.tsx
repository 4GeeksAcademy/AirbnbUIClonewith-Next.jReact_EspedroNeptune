import { LoaderCircle } from "lucide-react";

export const LoadingIndicator = () => (
  <div role="status" className="flex min-h-64 flex-col items-center justify-center gap-3 text-sm text-neutral-500">
    <LoaderCircle aria-hidden="true" className="animate-spin text-[#ff385c]" size={28} />
    <span>Finding your next stay...</span>
  </div>
);