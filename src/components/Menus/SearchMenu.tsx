import { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Room } from "@/types/Room";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { LoadingSpinner } from "../LoadingSpinner";
import { RoomShowcaseCard } from "../RoomShowcaseCard";
import { AmenitiesList } from "../AmenitiesList";
import { Button } from "../Button";
import { BiArrowBack, BiCheck, BiCheckCircle } from "react-icons/bi";
import { useSearchMenuControllerStore } from "@/stores/searchMenuControllerStore";
import { Input } from "../Input";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";

export const SearchMenu: FC = () => {
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);

  const openMenus = useMenuControllerStore((state) => state.openMenus);

  const selectedHotel = useHotelSearchStore((state) => state.hotel);
  const selectedDates = useHotelSearchStore((state) => state.dates);

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
  const [bookingPhone, setBookingPhone] = useState<string>("");

  useEffect(() => {
    if (!openMenus.includes("search")) return setAvailableRooms([]);
    // fetch("/api/availableRooms")
    //   .then((res) => res.json())
    //   .then((data) => setAvailableRooms(data));

    setTimeout(() => {
      setAvailableRooms([
        {
          name: "Room 1",
          description: "Room 1 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 2,
            double: 1,
          },
          amenities: ["TV", "WIFI", "HAIRDRYER"],
        },
        {
          name: "Room 2",
          description: "Room 2 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 3,
            double: 0,
          },
          amenities: ["TV", "WIFI", "WORKSPACE"],
        },
        {
          name: "Room 3",
          description: "Room 3 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 0,
            double: 1,
          },
          amenities: ["TV", "WIFI", "IRON"],
        },
        {
          name: "Room 4",
          description: "Room 4 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 1,
            double: 1,
          },
          amenities: ["TV", "WIFI", "ROOMSERVICE"],
        },
        {
          name: "Room 5",
          description: "Room 5 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 1,
            double: 0,
          },
          amenities: ["TV", "WIFI"],
        },
      ]);
    }, 2000);
  }, [openMenus]);

  const handleBooking = async () => {
    // Placeholder API call to book room (not implemented yet)

    // const response = await fetch("/api/bookRoom", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     hotel: {
    //       hotelName: selectedHotel,
    //       rooms: [selectedRoom], //TODO: Support booking multiple rooms
    //       dates: selectedDates,
    //     },
    //     customerInfo: {
    //       fullName: bookingFullName,
    //       email: bookingEmail,
    //       phone: bookingPhone,
    //     },
    //   }),
    // });

    // if (!response.ok)
    //   return alert(
    //     "An error occured while booking rooms (Server responded with an error))"
    //   );

    // const bookingConfirmation: { success: boolean; error: null | string } =
    //   await response.json();

    // if (bookingConfirmation.success) setSelectedSubMenu("bookingSuccess");
    // else
    //   alert(
    //     `An error occured while trying to book your rooms, please try again later. Error code: ${bookingConfirmation.error}`
    //   );

    // Demo while API is not implemented
    setSelectedSubMenu("bookingSuccess");
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
              <section className="w-1/2 flex flex-col gap-8">
                {selectedRoom && <AmenitiesList room={selectedRoom} />}
                {selectedRoom?.description}
              </section>
            </div>
            <section className="absolute bottom-0 left-0 w-full h-24 border-t border-gray-300 flex justify-between items-center px-4">
              <p>Overnight stay</p>
              <div className="flex gap-8 items-center">
                <h2>PRICE</h2>
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
          <div className="flex h-full">
            <section className="w-3/5 h-full p-4 flex flex-col gap-4">
              <h3>Guest Information</h3>
              <Input
                placeholder="Full name"
                onChange={(event) => setBookingFullName(event.target.value)}
              />
              <Input
                placeholder="Email"
                type="email"
                onChange={(event) => setBookingEmail(event.target.value)}
              />
              <Input
                placeholder="Phone"
                onChange={(event) => setBookingPhone(event.target.value)}
              />
            </section>
            <section className="w-2/5 h-full p-4 flex flex-col gap-4 bg-gray-100">
              <h3>Overview</h3>
              {/* TODO: Support booking multiple rooms */}
              <div className="w-full h-16 flex gap-2">
                <div className="flex items-center">
                  <img
                    className="h-12 w-16 rounded-lg object-cover object-center"
                    src={selectedRoom?.pictures[0]}
                    alt={selectedRoom?.name}
                  />
                </div>
                <div className="flex justify-center flex-col">
                  <p className="font-semibold text-lg">{selectedRoom?.name}</p>
                  <p className="text-gray-500 font-medium text-sm flex-wrap">
                    {selectedRoom?.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-semibold text-lg">PRICE</p>
                </div>
              </div>
            </section>
          </div>
          <section className="absolute bottom-0 left-0 w-full h-24 border-t border-gray-300 flex justify-end items-center px-4">
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
                <div className="w-full h-16 flex gap-2">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-16 rounded-lg object-cover object-center"
                      src={selectedRoom?.pictures[0]}
                      alt={selectedRoom?.name}
                    />
                  </div>
                  <div className="flex justify-center flex-col">
                    <p className="font-semibold text-lg">
                      {selectedRoom?.name}
                    </p>
                    <p className="text-gray-500 font-medium text-sm flex-wrap">
                      {selectedRoom?.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-semibold text-lg">PRICE</p>
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
