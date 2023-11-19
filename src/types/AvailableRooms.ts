export type Amenities =
  | "TV"
  | "HAIRDRYER"
  | "WORKSPACE"
  | "ROOMSERVICE"
  | "IRON"
  | "WIFI";

export type AvailableRooms = {
  name: string;
  description: string;
  pictures: string[];
  beds: {
    double: number;
    single: number;
  };
  amenities: Amenities[];
};
