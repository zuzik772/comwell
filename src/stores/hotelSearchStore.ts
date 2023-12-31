import { Events, RoomSearchParameters } from "@/types/HotelSearchParameters";
import { create } from "zustand";

type HotelSearchParameters = {
  hotel: string | null;
  setHotel: (values: string) => void;

  rooms: RoomSearchParameters[];
  setRooms: (values: RoomSearchParameters[]) => void;
  addRoom: () => void;
  removeRoom: (index: number) => void;

  dates: {
    startDate: Date;
    endDate: Date;
  };

  setDates: (values: { startDate: Date; endDate: Date }) => void;

  participants: number;
  setParticipants: (values: number) => void;

  times: {
    startTime: string;
    endTime: string;
  };
  setTimes: (values: { startTime: string; endTime: string }) => void;
  event: Events | null;
  setEvent: (values: Events) => void;
};

export const useHotelSearchStore = create<HotelSearchParameters>((set) => ({
  hotel: null,
  setHotel: (value) => set(() => ({ hotel: value })),

  rooms: [
    {
      adults: 1,
      kids: 0,
      infants: 0,
    },
  ],
  setRooms: (values) => set(() => ({ rooms: values })),
  addRoom: () => {
    set((state) => ({
      rooms: [
        ...state.rooms,
        {
          adults: 1,
          kids: 0,
          infants: 0,
        },
      ],
    }));
  },

  removeRoom: (index) => {
    set((state) => {
      const rooms = [...state.rooms];
      rooms.splice(index, 1);
      return { rooms };
    });
  },

  dates: {
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  },
  setDates: (values) => set(() => ({ dates: values })),

  participants: 8,
  setParticipants: (values) => set(() => ({ participants: values })),

  //Here is where the time on Dropdown comes from
  times: {
    startTime: "08:00",
    endTime: "16:00",
  },
  setTimes: (values) => set(() => ({ times: values })),

  event: null,
  setEvent: (values) => set(() => ({ event: values })),
}));
