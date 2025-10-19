export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    
import heroBg from "@/public/hero-bg.jpg"; 

export const HERO_BG = heroBg;

export const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Countryside",
  "Rooms",
  "Mansion",
  "Beach House",
];

export const PROPERTYLISTINGSAMPLE = [
  {
    id: 1,
    name: "Ocean View Villa",
    price: 200,
    rating: 4.5,
    image: "/villa.jpg",
  },
  {
    id: 2,
    name: "Mountain Cabin",
    price: 120,
    rating: 4.2,
    image: "/cabin.jpg",
  },
  {
    id: 3,
    name: "City Apartment",
    price: 90,
    rating: 4.0,
    image: "/apartment.jpg",
  },
];

    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://example.com/image2.jpg",
    discount: "30"
  },
  // ... continue with all sample listings
];
