import { Regions } from "@/types/Regions";
import { useEffect } from "react";

type HotelInformation = {
  location: string;
  picture: string;
  group: Regions;
};

// This is a mock of the data that would be fetched from the backend
// export const hotels: Record<Hotels, HotelInformation> = {
//   Hotel1: {
//     location: "Location 1",
//     picture:
//       "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     group: "Zealand",
//   },
//   Hotel2: {
//     location: "Location 2",
//     picture:
//       "https://images.pexels.com/photos/1580112/pexels-photo-1580112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     group: "Funen",
//   },
//   Hotel3: {
//     location: "Location 3",
//     picture:
//       "https://images.pexels.com/photos/705773/pexels-photo-705773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     group: "Jutland",
//   },
// };
