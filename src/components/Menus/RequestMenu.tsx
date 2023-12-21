import React, { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { MeetingRoom } from "@/types/MeetingRoom";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { MeetingRoomsShowcaseCard } from "../MeetingRoomShowcaseCard";
import { LoadingSpinner } from "../LoadingSpinner";
import { useSearchMenuControllerStore } from "@/stores/searchMenuControllerStore";
import { BiArrowBack, BiCheckCircle } from "react-icons/bi";
import { Button } from "../Button";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { FaSearch } from "react-icons/fa";
import { Dropdown } from "../Dropdown";

export const RequestMenu: FC = () => {
  const [availableMeetingRooms, setAvailableMeetingRooms] = useState<
    MeetingRoom[]
  >([]);
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const selectedHotel = useHotelSearchStore((state) => state.hotel);
  const hotel = useHotelSearchStore((state) => state.hotel);
  const dates = useHotelSearchStore((state) => state.dates);
  const participants = useHotelSearchStore((state) => state.participants);
  const times = useHotelSearchStore((state) => state.times);
  const addOpenMenu = useMenuControllerStore((state) => state.addOpenMenu);

  const selectedMeetingRoom = useSearchMenuControllerStore(
    (state) => state.searchMenuSelectedMeetingRoom
  );
  const setSelectedMeetingRoom = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSelectedMeetingRoom
  );

  const selectedSubMenu = useSearchMenuControllerStore(
    (state) => state.searchMenuSubMenu
  );
  const setSelectedSubMenu = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSubMenu
  );
  useEffect(() => {
    if (!openMenus.includes("request")) return setAvailableMeetingRooms([]);
    const searchUrl = new URL(`http://localhost:3001/meeting-rooms`);
    console.log(searchUrl);
    fetch(searchUrl.href)
      .then((res) => res.json())
      .then((data) => setAvailableMeetingRooms(data));
  }, [openMenus]);

  const handleMeetingRoomBooking = async () => {
    console.log("Your meeting room has been booked");
    // const response = await fetch(
    //   "http://localhost:3001/bookings/meetingRoomBooking",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       hotel: {
    //         hotelName: selectedHotel,
    //         rooms: [selectedRoom],
    //         dates: selectedDates,
    //       },
    //       customerInfo: {
    //         fullName: bookingFullName,
    //         email: bookingEmail,
    //         phone: bookingPhone,
    //       },
    //     }),
    //   }
    // );

    // if (!response.ok)
    //   return alert(
    //     "An error occured while booking rooms (Server responded with an error)"
    //   );
    // else setSelectedSubMenu("meetingRoomBookingSuccess");
  };

  return (
    <Menu title="Our recommendation" name="request" large>
      {selectedSubMenu === "selection" ? (
        <>
          {/* If room search has completed (has rooms) */}
          {availableMeetingRooms.length ? (
            availableMeetingRooms.map((meetingRoom) => (
              <MeetingRoomsShowcaseCard
                meetingRoom={meetingRoom}
                key={meetingRoom.description}
                onClick={() => {
                  setSelectedMeetingRoom(meetingRoom);
                  setSelectedSubMenu("meetingRoomInfo");
                }}
              />
            ))
          ) : (
            // If room search has not completed, show loading spinner
            <div className="w-full h-full flex justify-center items-center">
              <LoadingSpinner />
            </div>
          )}
        </>
      ) : selectedSubMenu === "meetingRoomInfo" ? (
        // roomInfo: General information about the selected room
        <>
          <div
            className="cursor-pointer bg-secondary rounded-full p-1.5 w-max"
            onClick={() => {
              setSelectedMeetingRoom(null);
              setSelectedSubMenu("selection");
            }}
          >
            <BiArrowBack />
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/m%C3%B8der_konferencer/comwell_moede-og-konference41.jpg/636f34e0fcca9da5c8a8dde859a5bf2f.webp"
              alt="meeting room"
            />
            <div className="flex px-12 py-2">
              <section className="w-1/2">
                <h2>{selectedHotel}</h2>
                <p>
                  Meeting room capacity:{" "}
                  <i>{selectedMeetingRoom?.maxCapacity} people</i>
                </p>
              </section>
              <section className="w-1/2 flex flex-col gap-8">
                <p>{selectedMeetingRoom?.description}</p>

                <ul className="flex w-full h-64s items-center gap-4 overflow-auto">
                  {selectedMeetingRoom?.bulletPoints.map((bulletPoint) => (
                    <li>{bulletPoint}</li>
                  ))}
                </ul>
                <Button
                  onClick={() => setSelectedSubMenu("meetingRoomBooking")}
                >
                  Continue
                </Button>
              </section>
            </div>
          </div>
        </>
      ) : selectedSubMenu === "meetingRoomBooking" ? (
        // booking: Customer booking information
        <>
          <div className="flex flex-col h-full">
            <section className="h-full p-4 flex flex-col gap-4">
              <h3>My request</h3>

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
              </>

              {/* <Input
                placeholder="Full name"
                value={bookingFullName}
                onChange={(event) => setBookingFullName(event.target.value)}
              />
              <Input
                placeholder="Email"
                value={bookingEmail}
                type="email"
                onChange={(event) => setBookingEmail(event.target.value)}
              />
              <Input
                placeholder="Phone"
                value={bookingPhone || ""}
                onChange={(event) =>
                  setBookingPhone(Number(event.target.value))
                }
              /> */}
            </section>
            <section className="h-full p-4 flex flex-col gap-4 bg-gray-100">
              <h3>Booker info</h3>
              {/* TODO: Support booking multiple rooms */}
              {/* <div className="w-full flex gap-2">
                <div className="flex items-center">
                  <img
                    className="h-12  min-w-[4rem] w-16 rounded-lg object-cover object-center"
                    src={selectedRoom?.pictures[0]}
                    alt={selectedRoom?.name}
                  />
                </div>
                <div className="flex justify-center flex-col">
                  <p className="font-semibold text-lg">{selectedRoom?.name}</p>
                  <p className="text-gray-500 font-medium text-sm flex-wrap overflow-hidden line-clamp-2">
                    {selectedRoom?.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-semibold text-lg whitespace-nowrap">
                    999 kr.
                  </p>
                </div>
              </div> */}
            </section>
          </div>
          <section className="absolute bottom-0 left-0 w-full h-24 border-t bg-white border-gray-300 flex justify-end items-center px-4">
            <Button
              onClick={handleMeetingRoomBooking}
              // disabled={!(bookingFullName && bookingEmail && bookingPhone)}
            >
              Book room
            </Button>
          </section>
        </>
      ) : selectedSubMenu === "meetingRoomBookingSuccess" ? (
        // meetingRoomBookingSuccess: Meeting room Booking sucessfully confirmed
        <>
          <section className="bg-primary w-full h-64 flex justify-center items-center">
            <BiCheckCircle className="text-9xl text-white" />
          </section>
          <section className="flex flex-col gap-4 h-full">
            <h1>Booking Confirmed</h1>
            <p className="text-xl">Your room has sucessfully been booked</p>
            {/* <div className="flex w-full h-full">
              <div className="flex flex-col gap-2 w-1/2 h-full p-4">
                <h3>Customer Info</h3>
                <p>
                  <span className="font-semibold">Name:</span> {bookingFullName}
                </p>
                <p>
                  <span className="font-semibold">Email: </span>
                  {bookingEmail}
                </p>
                <p>
                  <span className="font-semibold">Phone: </span>
                  {bookingPhone}
                </p>
              </div>
              <div className="bg-gray-100 w-1/2 h-full p-4">
                <h3>Room Info</h3>
                <div className="w-full h-16 flex gap-2">
                  <div className="flex items-center">
                    <img
                      className="h-12  min-w-[4rem] w-16 rounded-lg object-cover object-center"
                      src={selectedRoom?.pictures[0]}
                      alt={selectedRoom?.name}
                    />
                  </div>
                  <div className="flex justify-center flex-col">
                    <p className="font-semibold text-lg">
                      {selectedRoom?.name}
                    </p>
                    <p className="text-gray-500 font-medium text-sm flex-wrap overflow-hidden line-clamp-2">
                      {selectedRoom?.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-semibold text-lg">PRICE</p>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </>
      ) : null}
    </Menu>
  );
};
