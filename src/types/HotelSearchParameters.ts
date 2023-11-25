export type Hotels = "Hotel1" | "Hotel2" | "Hotel3";

export type RoomSearchParameters = {
  adults: number;
  kids: number;
  infants: number;
};

export type HotelDatesParameters = {
  startDate: Date;
  endDate: Date;
};

export type MeetingTimesParameters = {
  startTime: string;
  endTime: string;
};

export type Events =
  | "Anniversay"
  | "Baptism"
  | "Christmas Party"
  | "Company Event"
  | "Confirmation"
  | "Memorial Service"
  | "Other Banquets"
  | "Rent the entire hotel"
  | "Wedding";
