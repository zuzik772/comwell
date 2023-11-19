import { Hotels } from "@/types/HotelSearchParameters";

type HotelInformation = {
  location: string;
  picture: string;
  group: "Zealand" | "Funen" | "Jutland";
};

export const hotels: Record<Hotels, HotelInformation> = {
  Hotel1: {
    location: "Location 1",
    picture: "https://picsum.photos/1920/1080",
    group: "Zealand",
  },
  Hotel2: {
    location: "Location 2",
    picture: "https://picsum.photos/1920/1080",
    group: "Funen",
  },
  Hotel3: {
    location: "Location 3",
    picture: "https://picsum.photos/1920/1080",
    group: "Jutland",
  },
};
