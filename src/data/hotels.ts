import { Hotels } from "@/types/HotelSearchParameters";

type HotelInformation = {
  name: string;
  location: string;
  picture: string;
  group: "Zealand" | "Funen" | "Jutland";
};

export const hotels: Record<Hotels, HotelInformation> = {
  Hotel1: {
    name: "Hotel 1",
    location: "Location 1",
    picture: "https://picsum.photos/1920/1080",
    group: "Zealand",
  },
  Hotel2: {
    name: "Hotel 2",
    location: "Location 2",
    picture: "https://picsum.photos/1920/1080",
    group: "Funen",
  },
  Hotel3: {
    name: "Hotel 3",
    location: "Location 3",
    picture: "https://picsum.photos/1920/1080",
    group: "Jutland",
  },
};
