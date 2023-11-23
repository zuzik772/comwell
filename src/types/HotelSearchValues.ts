import {
  RoomSearchParameters,
  HotelDatesParameters,
  MeetingTimesParameters,
  Hotels,
} from "./HotelSearchParameters";

export type AccommodationSearchValues = {
  hotel: Hotels | null;
  rooms: RoomSearchParameters[];
  dates: HotelDatesParameters;
};

export type MeetingSearchValues = {
  participants: number;
  hotel: Hotels | null;
  dates: HotelDatesParameters;
  times: MeetingTimesParameters;
};

export type BanquetSearchValues = {
  event: string | null;
  participants: number;
  hotel: Hotels | null;
  dates: HotelDatesParameters;
};
