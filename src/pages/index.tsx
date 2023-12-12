import { Pill } from "@/components/Pill";
import { TeasersCard } from "@/components/TeasersCard";

import { SectionHeading } from "@/components/SectionHeading";
import { OffersCard } from "@/components/OffersCard";
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

  // Getters for the hotel search store
  const hotel = useHotelSearchStore((state) => state.hotel);
  const rooms = useHotelSearchStore((state) => state.rooms);
  const dates = useHotelSearchStore((state) => state.dates);
  const participants = useHotelSearchStore((state) => state.participants);
  const times = useHotelSearchStore((state) => state.times);
  const event = useHotelSearchStore((state) => state.event);

  // Opens a new menu
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
                      // Disable the button if any of the required fields are empty
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
                    onClick={() => addOpenMenu("participants")}
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
                      value={times.startTime} // These should be the clicked time
                      onClick={() => addOpenMenu("startTime")}
                      small
                    />
                    <Dropdown
                      type="time"
                      title="End"
                      value={times.endTime} // These should be the clicked time
                      onClick={() => addOpenMenu("endTime")}
                      small
                    />
                  </div>

                  <Button
                    onClick={() => addOpenMenu("request")}
                    fullWidth
                    // Disable the button if any of the required fields are empty
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
                    // Disable the button if any of the required fields are empty
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
      <section className="flex flex-col items-center p-10">
        <SectionHeading heading="Offers & Experiences" />
        <div className="flex gap-16">
          <OffersCard
            title="Overnight stay with breakfast buffet"
            description="Accommodation with large breakfast buffet with organic and local specialties"
            price={1299}
            specialPrice={1249}
            imageSrc="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/mad/comwell-morgenmad.jpg/49a6cf781f055baf9100b8f8a37e61a0.webp"
            imageAlt="Breakfast offer"
            label="Overnight stay"
            labelDesc="The safe choice"
          />
          <OffersCard
            title="Spadelight at two Comwell-hotels"
            description="Enjoy a spa stay at one of our two spa hotels in Denmark. This stay is including free AquaSpa access, 3-course dinner, accommodation and breakfast buffet."
            price={1999}
            specialPrice={1949}
            imageSrc="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/spa/comwell-borupgaard-spa-01.jpg/bf9ba34bdf7b7c1bfd3a7ea0f55907c7.webp"
            imageAlt="Spa offer"
            label="Spa"
            labelDesc="Pleasure for all the senses"
          />
          <OffersCard
            title="Blissful Break"
            description="Cosy afternoon coffee with cake - and later 3-course dinner."
            price={1099}
            specialPrice={1049}
            imageSrc="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/restaurant/comwell-borupgaard-restaurant-skaldyrsaften-01.jpg/fc8eec489f373ea7c5f6afe4dbff09bb.webp"
            imageAlt="Dinner offer"
            label="Gastronomy"
            labelDesc="Afternoon fun and celebration"
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 p-10">
        <SectionHeading heading="What happens at Comwell Hotels" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="flex gap-16 ">
          <TeasersCard
            heading={"Book ophold og spar"}
            label={"Label"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            imageUrl={
              "https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-juniorsuite.jpg/cc2c38d38934a12bc46749023521128e.jpg"
            }
          />
          <TeasersCard
            heading={"Skal vi holde dit næste event?"}
            label={"Label"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            imageUrl={
              "https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-juniorsuite.jpg/cc2c38d38934a12bc46749023521128e.jpg"
            }
          />
          <TeasersCard
            heading={"Lorem ipsum dolor sit amet"}
            label={"Label"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            imageUrl={
              "https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-juniorsuite.jpg/cc2c38d38934a12bc46749023521128e.jpg"
            }
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
