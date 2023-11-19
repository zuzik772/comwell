import { Pill } from "@/components/Pill";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import heroImage from "../img/hero.jpg";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { FaSearch } from "react-icons/fa";

import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { useMenuControllerStore } from "@/stores/menuControllerStore";

const Home = () => {
  const [selectedPill, setSelectedPill] = useState<
    "Accommodation" | "Meeting & Conference" | "Banquet"
  >("Accommodation");

  const hotel = useHotelSearchStore((state) => state.hotel);
  const rooms = useHotelSearchStore((state) => state.rooms);
  const dates = useHotelSearchStore((state) => state.dates);
  const participants = useHotelSearchStore((state) => state.participants);
  const times = useHotelSearchStore((state) => state.times);
  const event = useHotelSearchStore((state) => state.event);

  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const addOpenMenu = useMenuControllerStore((state) => state.addOpenMenu);

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center">
        <div className="mt-96 max-w-screen-2xl w-full">
          <div className="w-[30rem] rounded-2xl bg-white p-8 flex flex-col gap-4 ml-16 mb-8">
            <h2>Check in at Comwell and discover Denmark</h2>
            <div className="flex gap-4">
              <Pill
                selected={selectedPill === "Accommodation"}
                onClick={() => setSelectedPill("Accommodation")}
              >
                Accommodation
              </Pill>
              <Pill
                selected={selectedPill === "Meeting & Conference"}
                onClick={() => setSelectedPill("Meeting & Conference")}
              >
                Meeting & Conference
              </Pill>
              <Pill
                selected={selectedPill === "Banquet"}
                onClick={() => setSelectedPill("Banquet")}
              >
                Banquet
              </Pill>
            </div>
            <div className="flex flex-col gap-4">
              {selectedPill === "Accommodation" ? (
                <>
                  <Dropdown
                    type="hotel"
                    title="Hotel"
                    value={hotel}
                    onClick={() => addOpenMenu("hotels")}
                  />
                  <Dropdown
                    type="rooms"
                    title="Rooms"
                    value={rooms}
                    onClick={() => addOpenMenu("rooms")}
                  />
                  <div className="flex gap-2">
                    <Dropdown
                      type="checkIn"
                      title="Check in"
                      value={dates.startDate}
                      onClick={() => addOpenMenu("datePicker")}
                      small
                    />
                    <Dropdown
                      type="checkOut"
                      title="Check out"
                      value={dates.endDate}
                      onClick={() => addOpenMenu("datePicker")}
                      small
                    />
                  </div>

                  <Button
                    onClick={() => addOpenMenu("search")}
                    fullWidth
                    disabled={
                      !(
                        hotel &&
                        rooms.length > 0 &&
                        dates.startDate &&
                        dates.endDate &&
                        dates.endDate > dates.startDate
                      )
                    }
                  >
                    Search <FaSearch />
                  </Button>
                </>
              ) : selectedPill === "Meeting & Conference" ? (
                <>
                  <Dropdown
                    type="text"
                    title="Amount of participants"
                    value={participants}
                    onClick={() => alert("Participants Dropdown Clicked")}
                  />
                  <Dropdown
                    type="hotel"
                    title="Hotel"
                    value={hotel}
                    onClick={() => addOpenMenu("hotels")}
                  />
                  <Dropdown
                    type="dates"
                    title="Date"
                    value={dates}
                    onClick={() => addOpenMenu("datePicker")}
                  />
                  <div className="flex gap-2">
                    <Dropdown
                      type="time"
                      title="Start"
                      value={times.startTime}
                      onClick={() => alert("Start Dropdown Clicked")}
                      small
                    />
                    <Dropdown
                      type="time"
                      title="End"
                      value={times.endTime}
                      onClick={() => alert("End Dropdown Clicked")}
                      small
                    />
                  </div>

                  <Button
                    onClick={() => alert("Request Button Clicked")}
                    fullWidth
                    disabled={
                      !(
                        participants &&
                        hotel &&
                        dates &&
                        times.startTime &&
                        times.endTime &&
                        dates.endDate > dates.startDate
                      )
                    }
                  >
                    Request <FaSearch />
                  </Button>
                </>
              ) : selectedPill === "Banquet" ? (
                <>
                  <Dropdown
                    type="event"
                    title="Event type"
                    value={event}
                    onClick={() => alert("Event Type Dropdown Clicked")}
                  />
                  <Dropdown
                    type="text"
                    title="Amount of participants"
                    value={participants}
                    onClick={() => alert("Participants Dropdown Clicked")}
                  />
                  <Dropdown
                    type="hotel"
                    title="Hotel"
                    value={hotel}
                    onClick={() => addOpenMenu("hotels")}
                  />
                  <Dropdown
                    type="dates"
                    title="Date"
                    value={dates}
                    onClick={() => addOpenMenu("datePicker")}
                  />

                  <Button
                    onClick={() => alert("Request Button Clicked")}
                    fullWidth
                    disabled={
                      !(
                        event &&
                        participants &&
                        hotel &&
                        dates.startDate &&
                        dates.endDate &&
                        dates.endDate > dates.startDate
                      )
                    }
                  >
                    Request <FaSearch />
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        </div>

        <Image
          src={heroImage}
          alt="hero"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
        />
      </section>
      <section>
        <h1>Placeholder Text</h1>
      </section>
      <br />
      <Link href="/test">Test page</Link>
    </main>
  );
};

export default Home;
