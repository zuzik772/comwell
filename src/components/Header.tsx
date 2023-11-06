import React, { useEffect, useState } from "react";
import logo from "../img/Logo.svg";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export const Header = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      setNavbarTransparent(window.scrollY < 100);
    };
  }, []);

  return (
    <header
      className={`z-50 fixed w-full duration-200 ${
        navbarTransparent ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <nav
        className={`${
          navbarTransparent ? "invert" : "invert-0"
        } duration-200 w-full p-6 flex justify-between`}
        style={{
          fontFamily: "Fellix-SemiBold",
        }}
      >
        <a>
          <Image src={logo} alt={""} />
        </a>
        <ul className="flex gap-8">
          <li className="flex items-center gap-2">
            Locations <BiChevronDown className="text-xl" />
          </li>
          <li className="flex items-center gap-2">
            Profile <FaRegUser className="text-xl" />
          </li>
          <li className="flex items-center gap-2">
            Menu <HiMenu className="text-xl" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
