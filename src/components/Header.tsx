import React, { FC, useEffect, useState } from "react";
import logo from "../img/Logo.svg";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { ProfilePopup } from "./ProfilePopup";
import Link from "next/link";

export const Header: FC = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [forceNavbarVisible, setForceNavbarVisible] = useState(false);

  const [locationsOpen, setLocationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setNavbarVisible(window.scrollY > 100);
    };
  }, []);

  return (
    <>
      <header
        className={`z-50 fixed w-full flex justify-center duration-200 ${
          navbarVisible || forceNavbarVisible
            ? "bg-secondary"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`${
            navbarVisible || forceNavbarVisible ? "invert-0" : "invert"
          } max-w-screen-2xl w-full duration-200 p-6 flex justify-between font-semibold`}
        >
          <Link href="/" title={"Go to frontpage"}>
            <Image src={logo} alt="Comwell Hotels" />
          </Link>
          <ul className="flex gap-8">
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setForceNavbarVisible(true);
                setLocationsOpen(true);
              }}
            >
              Locations <BiChevronDown className="text-xl" />
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setProfileOpen(true);
                setForceNavbarVisible(true);
              }}
            >
              Profile <FaRegUser className="text-xl" />
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setMenuOpen(true);
                setForceNavbarVisible(true);
              }}
            >
              Menu <HiMenu className="text-xl" />
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-40 duration-200 ${
          locationsOpen || profileOpen || menuOpen
            ? "opacity-50"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setForceNavbarVisible(false);
          setLocationsOpen(false);
          setProfileOpen(false);
          setMenuOpen(false);
        }}
      />

      {/* Locations Card */}
      <ProfilePopup isVisible={profileOpen} />
      {/* Menu */}
    </>
  );
};
