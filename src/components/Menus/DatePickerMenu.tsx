import { FC, useState } from "react";
import { Menu } from "./Menu";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";

export const DatePickerMenu: FC = () => {
  const dates = useHotelSearchStore((state) => state.dates);
  const setDates = useHotelSearchStore((state) => state.setDates);

  return (
    <Menu title="Dates" name="datePicker">
      <div className="flex flex-col gap-4">
        <section
          className={`bg-red-400 rounded-lg text-white px-6 py-3 ${
            dates.endDate > dates.startDate && "hidden"
          }`}
        >
          Invalid date range!
        </section>
        <section className="flex gap-2 bg-primary p-6 justify-center lgmd">
          <p className="text-white">Check in date:</p>
          <input
            type="date"
            value={dates.startDate.toISOString().split("T")[0]}
            onChange={(event) =>
              setDates({
                ...dates,
                startDate: new Date(event.target.value),
              })
            }
            className="bg-secondary"
          />
        </section>
        <section className="flex gap-2 bg-primary p-6 justify-center rounded-lg">
          <p className="text-white">Check out date:</p>
          <input
            type="date"
            value={dates.endDate.toISOString().split("T")[0]}
            onChange={(event) =>
              setDates({
                ...dates,
                endDate: new Date(event.target.value),
              })
            }
            className="bg-secondary"
          />
        </section>
      </div>
    </Menu>
  );
};
