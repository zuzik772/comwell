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
import { Input } from "../Input";

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

  const [company, setCompany] = useState<string>("");
  const [optionalDepartment, setOptionalDepartment] = useState<string>("");
  const [optionalMeetingName, setOptionalMeetingName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");

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
    fetch(searchUrl.href)
      .then((res) => res.json())
      .then((data) => setAvailableMeetingRooms(data));
  }, [openMenus]);

  const handleMeetingRoomBooking = async () => {
    const response = await fetch("http://localhost:3001/bookers-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company,
        optionalDepartment,
        optionalMeetingName,
        fullName,
        email,
        phone,
        comment,
      }),
    });
    if (!response.ok) {
      return alert(
        "An error occured while booking a meeting room (Server responded with an error)"
      );
    }
    setSelectedSubMenu("meetingRoomBookingSuccess");
  };

  return (
    <Menu title="Our recommendation" name="request" large>
      {selectedSubMenu === "selection" ? (
        <>
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
              src={selectedMeetingRoom?.picture}
              alt={selectedMeetingRoom?.description}
            />
            <div className="flex gap-2 flex-col px-12 py-2">
              <h2>{selectedHotel}</h2>
              <p>{selectedMeetingRoom?.description}</p>
              <p>
                Meeting room capacity:{" "}
                <i>{selectedMeetingRoom?.maxCapacity} people</i>
              </p>
              <ul className="flex flex-col w-full gap-1 list-disc pl-6 pb-4`0">
                {selectedMeetingRoom?.bulletPoints.map((bulletPoint) => (
                  <li>{bulletPoint}</li>
                ))}
              </ul>

              <section className="fixed bottom-0 right-0 w-fit h-24 flex items-center px-4">
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
          <div
            className="cursor-pointer bg-secondary rounded-full p-1.5 w-max"
            onClick={() => {
              setSelectedMeetingRoom(selectedMeetingRoom);
              setSelectedSubMenu("meetingRoomInfo");
            }}
          >
            <BiArrowBack />
          </div>
          <div className="flex flex-col h-screen relative">
            <section className=" p-4 flex flex-col gap-4">
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
            </section>
            <section className="p-4 flex flex-col gap-4">
              <h3>Booker info</h3>
              <Input
                placeholder="Company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
              <Input
                placeholder="Optional department"
                value={optionalDepartment}
                onChange={(event) => setOptionalDepartment(event.target.value)}
              />
              <Input
                placeholder="Optional meeting name"
                value={optionalMeetingName || ""}
                onChange={(event) => setOptionalMeetingName(event.target.value)}
              />

              <Input
                placeholder="Full name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
              <Input
                placeholder="Email"
                value={email}
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                placeholder="Phone"
                value={phone || ""}
                onChange={(event) => setPhone(Number(event.target.value))}
              />
            </section>
            <section className="p-4 flex flex-col gap-4 pb-40">
              <h3>Comment</h3>
              <Input
                placeholder="Add optional comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
            </section>
            <section className="fixed bottom-0 right-0 w-[48rem] h-24 border-t border-gray-300 bg-white flex justify-end items-center p-4">
              <Button
                onClick={handleMeetingRoomBooking}
                disabled={!(company && fullName && email && phone)}
              >
                Send request
              </Button>
            </section>
          </div>
        </>
      ) : selectedSubMenu === "meetingRoomBookingSuccess" ? (
        // meetingRoomBookingSuccess: Meeting room Booking sucessfully confirmed
        <>
          <section className="bg-primary w-full h-64 flex justify-center items-center">
            <BiCheckCircle className="text-9xl text-white" />
          </section>
          <section className="flex flex-col gap-4 h-full">
            <h1>Booking Confirmed</h1>
            <p className="text-xl">
              Your meeting room has been sucessfully booked
            </p>
            <div className="flex w-full h-full">
              <div className="flex flex-col gap-2 w-1/2 h-full p-4">
                <h3>Customer Info</h3>
                <p>
                  <span className="font-semibold">Company:</span> {company}
                </p>
                <p>
                  <span className="font-semibold">Name:</span> {fullName}
                </p>
                <p>
                  <span className="font-semibold">Email: </span>
                  {email}
                </p>
                <p>
                  <span className="font-semibold">Phone: </span>
                  {phone}
                </p>
              </div>
              <div className="bg-gray-100 w-1/2 h-full p-4">
                <h3>Meeting Room Info</h3>
                <div className="w-full h-16 flex gap-2">
                  <div className="flex items-center">
                    {/* <img
                      className="h-12  min-w-[4rem] w-16 rounded-lg object-cover object-center"
                      src={selectedRoom?.pictures[0]}
                      alt={selectedRoom?.name}
                    /> */}
                  </div>
                  <div className="flex justify-center flex-col">
                    {/* <p className="font-semibold text-lg">{selectedHotel}</p> */}
                    <p className="text-gray-500 font-medium text-sm flex-wrap overflow-hidden line-clamp-2">
                      {selectedMeetingRoom?.description}
                    </p>
                  </div>
                  {/* <div className="flex items-center">
                    <p className="font-semibold text-lg">PRICE</p>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </Menu>
  );
};
