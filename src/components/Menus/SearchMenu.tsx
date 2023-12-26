import { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Room } from "@/types/Room";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { LoadingSpinner } from "../LoadingSpinner";
import { RoomShowcaseCard } from "../RoomShowcaseCard";
import { AmenitiesList } from "../AmenitiesList";
import { Button } from "../Button";
import { BiArrowBack, BiCheckCircle } from "react-icons/bi";
import { useSearchMenuControllerStore } from "@/stores/searchMenuControllerStore";
import { Input } from "../Input";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { getTokenInfo } from "@/services/getTokenInfo";
import { useLoginManagerStore } from "@/stores/loginManagerStore";

export const SearchMenu: FC = () => {
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);

  const openMenus = useMenuControllerStore((state) => state.openMenus);

  const selectedHotel = useHotelSearchStore((state) => state.hotel);
  const selectedDates = useHotelSearchStore((state) => state.dates);
  const searchedRooms = useHotelSearchStore((state) => state.rooms);

  const selectedRoom = useSearchMenuControllerStore(
    (state) => state.searchMenuSelectedRoom
  );
  const setSelectedRoom = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSelectedRoom
  );

  const selectedSubMenu = useSearchMenuControllerStore(
    (state) => state.searchMenuSubMenu
  );
  const setSelectedSubMenu = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSubMenu
  );

  const [bookingFullName, setBookingFullName] = useState<string>("");
  const [bookingEmail, setBookingEmail] = useState<string>("");
  const [bookingPhone, setBookingPhone] = useState<number | null>(null);

  const token = useLoginManagerStore((state) => state.token);

  useEffect(() => {
    const tokenInfo = getTokenInfo(token);

    if (token) {
      setBookingFullName(tokenInfo.fullName);
      setBookingEmail(tokenInfo.email);
      setBookingPhone(tokenInfo.phone || null);
    } else {
      setBookingFullName("");
      setBookingEmail("");
      setBookingPhone(null);
    }
  }, [token]);

  useEffect(() => {
    if (!openMenus.includes("search")) return setAvailableRooms([]);
    const searchUrl = new URL(`http://localhost:3001/hotels/${selectedHotel}`);

    searchUrl.searchParams.append("adults", searchedRooms[0].adults.toString());
    searchUrl.searchParams.append("kids", searchedRooms[0].kids.toString());
    searchUrl.searchParams.append(
      "infants",
      searchedRooms[0].infants.toString()
    );
    searchUrl.searchParams.append(
      "checkIn",
      selectedDates.startDate.toString()
    );
    searchUrl.searchParams.append("checkOut", selectedDates.endDate.toString());

    fetch(searchUrl.href)
      .then((res) => res.json())
      .then((data) => setAvailableRooms(data));
  }, [openMenus]);

  const handleBooking = async () => {
    const response = await fetch(
      "http://localhost:3001/bookings/create-booking",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hotel: {
            hotelName: selectedHotel,
            rooms: [selectedRoom],
            dates: selectedDates,
          },
          customerInfo: {
            fullName: bookingFullName,
            email: bookingEmail,
            phone: bookingPhone,
          },
        }),
      }
    );

    if (!response.ok)
      return alert(
        "An error occured while booking rooms (Server responded with an error)"
      );
    else setSelectedSubMenu("bookingSuccess");
  };

  return (
    <Menu title="Choose room" name="search" large>
      {selectedSubMenu === "selection" ? (
        // selection: Room picker

        <>
          {/* If room search has completed (has rooms) */}
          {availableRooms.length ? (
            availableRooms.map((room) => (
              <RoomShowcaseCard
                room={room}
                key={room.name}
                price={999}
                onClick={() => {
                  setSelectedRoom(room);
                  setSelectedSubMenu("roomInfo");
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
      ) : selectedSubMenu === "roomInfo" ? (
        // roomInfo: General information about the selected room
        <>
          <div
            className="cursor-pointer bg-secondary rounded-full p-1.5 w-max"
            onClick={() => {
              setSelectedRoom(null);
              setSelectedSubMenu("selection");
            }}
          >
            <BiArrowBack className="text-xl" />
          </div>
          <div className="flex flex-col gap-12">
            <section className="flex w-full h-64s items-center gap-4 overflow-auto">
              {selectedRoom?.pictures.map((picture) => (
                <img
                  key={picture}
                  src={picture}
                  className="aspect-video h-64 object-cover object-center rounded-xl"
                  alt={selectedRoom.name}
                />
              ))}
            </section>
            <div className="flex px-12 py-2">
              <section className="w-1/2">
                <h2>{selectedRoom?.name}</h2>
              </section>
              <section className="w-1/2 flex flex-col gap-8 h-full overflow-y-auto pb-20">
                {selectedRoom && <AmenitiesList room={selectedRoom} />}
                {selectedRoom?.description}
              </section>
            </div>
            <section className="fixed bottom-0 right-0 w-[48rem] h-24 border-t border-gray-300 flex justify-between items-center px-4 bg-white">
              <p>Overnight stay</p>
              <div className="flex gap-8 items-center">
                <h2 className="w-full">999 kr.</h2>
                <Button onClick={() => setSelectedSubMenu("booking")}>
                  Continue
                </Button>
              </div>
            </section>
          </div>
        </>
      ) : selectedSubMenu === "booking" ? (
        // booking: Customer booking information
        <>
          <div
            className="cursor-pointer bg-secondary rounded-full p-1.5 w-max"
            onClick={() => {
              setSelectedRoom(selectedRoom);
              setSelectedSubMenu("roomInfo");
            }}
          >
            <BiArrowBack className="text-xl" />
          </div>
          <div className="flex h-full">
            <section className="w-3/5 h-full p-4 flex flex-col gap-4">
              <h3>Guest Information</h3>
              <Input
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
              />
            </section>
            <section className="w-2/5 h-full p-4 flex flex-col gap-4 bg-gray-100">
              <h3>Overview</h3>
              {/* TODO: Support booking multiple rooms */}
              <div className="w-full flex gap-2">
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
              </div>
            </section>
          </div>
          <section className="absolute bottom-0 left-0 w-full h-24 border-t bg-white border-gray-300 flex justify-end items-center px-4">
            <Button
              onClick={handleBooking}
              disabled={!(bookingFullName && bookingEmail && bookingPhone)}
            >
              Book room
            </Button>
          </section>
        </>
      ) : selectedSubMenu === "bookingSuccess" ? (
        // bookingSuccess: Booking sucessfully confirmed
        <>
          <section className="bg-primary w-full h-64 flex justify-center items-center">
            <BiCheckCircle className="text-9xl text-white" />
          </section>
          <section className="flex flex-col gap-4 h-full">
            <h1>Booking Confirmed</h1>
            <p className="text-xl">Your room has sucessfully been booked</p>
            <div className="flex w-full h-full">
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
                <div className="w-full h-fit flex gap-2 pt-4">
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

                    <p className="font-semibold text-lg"> Total: 999 kr.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </Menu>
  );
};
