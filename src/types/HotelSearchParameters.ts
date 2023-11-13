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
  // TODO: Make these dates?
};
