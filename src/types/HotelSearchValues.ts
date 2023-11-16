import {
  RoomSearchParameters,
  HotelDatesParameters,
  MeetingTimesParameters,
} from "./HotelSearchParameters";

export type AccommodationSearchValues = {
  hotel: string | null;
  rooms: RoomSearchParameters[];
  dates: HotelDatesParameters;
};

export type MeetingSearchValues = {
  participants: number;
  hotel: string | null;
  dates: HotelDatesParameters;
  times: MeetingTimesParameters;
};

export type BanquetSearchValues = {
  event: string | null;
  participants: number;
  hotel: string | null;
  dates: HotelDatesParameters;
};
