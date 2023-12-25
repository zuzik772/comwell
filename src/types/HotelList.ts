import { MeetingRoom } from "./MeetingRoom";
import { Regions } from "./Regions";
import { Room } from "./Room";

export type HotelList = {
  country: string;
  picture: string;
  city: string;
  group: Regions;
  address: string;
  phone: string;
  title: string;
  rooms: Room[];
  meetingRooms: MeetingRoom[];
};
