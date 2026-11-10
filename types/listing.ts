export type ListingCategory = "Beach" | "Cabins" | "Design" | "Countryside" | "Pools" | "City";
export type FilterCategory = ListingCategory | "All stays";
export type AmenityIcon = "Wifi" | "Waves" | "CookingPot" | "Car" | "Tv" | "Wind" | "Trees" | "Flame" | "Mountain" | "Dumbbell";

export interface Amenity {
  label: string;
  icon: AmenityIcon;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  category: ListingCategory;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  photos: string[];
  host: { name: string; yearsHosting: number; initials: string };
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: Amenity[];
  description: string;
}