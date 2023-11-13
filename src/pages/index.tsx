import { Pill } from "@/components/Pill";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import heroImage from "../img/hero.jpg";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { FaSearch } from "react-icons/fa";
import {
  HotelDatesParameters,
  MeetingTimesParameters,
  RoomSearchParameters,
} from "@/types/HotelSearchParameters";

const Home = () => {
  const [selectedPill, setSelectedPill] = useState<
    "Accommodation" | "Meeting & Conference" | "Banquet"
  >("Accommodation");

  type AccommodationSearchValues = {
    hotel: string | null;
    rooms: RoomSearchParameters[];
    dates: HotelDatesParameters;
  };

  type MeetingSearchValues = {
    participants: number;
    hotel: string | null;
    dates: HotelDatesParameters;
    times: MeetingTimesParameters;
  };

  type BanquetSearchValues = {
    event: string | null;
    participants: number;
    hotel: string | null;
    dates: HotelDatesParameters;
  };

  const [accommodationSearchValues, setAccommodationSearchValues] =
    useState<AccommodationSearchValues>({
      hotel: null,
      rooms: [
        {
          adults: 1,
          kids: 0,
          infants: 0,
        },
      ],
      dates: {
        startDate: new Date(),
        // Tomorrow
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
    });

  const [meetingSearchValues, setMeetingSearchValues] =
    useState<MeetingSearchValues>({
      participants: 8,
      hotel: null,
      dates: {
        startDate: new Date(),
        // Tomorrow
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      times: {
        startTime: "08:00", // TODO: Make date?
        endTime: "16:00", // TODO: Make date?
      },
    });

  const [banquetSearchValues, setBanquetSearchValues] =
    useState<BanquetSearchValues>({
      event: null,
      participants: 25,
      hotel: null,
      dates: {
        startDate: new Date(),
        // Tomorrow
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
    });

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
                    value={accommodationSearchValues.hotel}
                    onClick={() => alert("Hotel Dropdown Clicked")}
                  />
                  <Dropdown
                    type="rooms"
                    title="Rooms"
                    value={accommodationSearchValues.rooms}
                    onClick={() => alert("Rooms Dropdown Clicked")}
                  />
                  <div className="flex gap-2">
                    <Dropdown
                      type="checkIn"
                      title="Check in"
                      value={accommodationSearchValues.dates.startDate}
                      onClick={() => alert("Check In Dropdown Clicked")}
                      small
                    />
                    <Dropdown
                      type="checkOut"
                      title="Check out"
                      value={accommodationSearchValues.dates.endDate}
                      onClick={() => alert("Check Out Dropdown Clicked")}
                      small
                    />
                  </div>

                  <Button
                    onClick={() => alert("Search Button Clicked")}
                    fullWidth
                    disabled // TODO: Handle disabled state
                  >
                    Search <FaSearch />
                  </Button>
                </>
              ) : selectedPill === "Meeting & Conference" ? (
                <>
                  <Dropdown
                    type="text"
                    title="Amount of participants"
                    value={meetingSearchValues.participants}
                    onClick={() => alert("Participants Dropdown Clicked")}
                  />
                  <Dropdown
                    type="hotel"
                    title="Hotel"
                    value={meetingSearchValues.hotel}
                    onClick={() => alert("Hotel Dropdown Clicked")}
                  />
                  <Dropdown
                    type="dates"
                    title="Date"
                    value={meetingSearchValues.dates}
                    onClick={() => alert("Dates Dropdown Clicked")}
                  />
                  <div className="flex gap-2">
                    <Dropdown
                      type="time"
                      title="Start"
                      value={meetingSearchValues.times.startTime}
                      onClick={() => alert("Start Dropdown Clicked")}
                      small
                    />
                    <Dropdown
                      type="time"
                      title="End"
                      value={meetingSearchValues.times.endTime}
                      onClick={() => alert("End Dropdown Clicked")}
                      small
                    />
                  </div>

                  <Button
                    onClick={() => alert("Request Button Clicked")}
                    fullWidth
                    disabled // TODO: Handle disabled state
                  >
                    Request <FaSearch />
                  </Button>
                </>
              ) : selectedPill === "Banquet" ? (
                <>
                  <Dropdown
                    type="event"
                    title="Event type"
                    value={banquetSearchValues.event}
                    onClick={() => alert("Event Type Dropdown Clicked")}
                  />
                  <Dropdown
                    type="text"
                    title="Amount of participants"
                    value={banquetSearchValues.participants}
                    onClick={() => alert("Participants Dropdown Clicked")}
                  />
                  <Dropdown
                    type="hotel"
                    title="Hotel"
                    value={banquetSearchValues.hotel}
                    onClick={() => alert("Hotel Dropdown Clicked")}
                  />
                  <Dropdown
                    type="dates"
                    title="Date"
                    value={banquetSearchValues.dates}
                    onClick={() => alert("Dates Dropdown Clicked")}
                  />

                  <Button
                    onClick={() => alert("Request Button Clicked")}
                    fullWidth
                    disabled // TODO: Handle disabled state
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
