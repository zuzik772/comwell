import React, { FC, useEffect } from "react";
import logo from "../img/Logo.svg";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { ProfilePopup } from "./ProfilePopup";
import Link from "next/link";
import { useHeaderControllerStore } from "@/stores/headerController";
import { useMenuControllerStore } from "@/stores/menuControllerStore";

export const Header: FC = () => {
  const navbarVisible = useHeaderControllerStore(
    (state) => state.navbarVisible
  );
  const setNavbarVisible = useHeaderControllerStore(
    (state) => state.setNavbarVisible
  );

  const forceNavbarVisible = useHeaderControllerStore(
    (state) => state.forceNavbarVisible
  );

  const setForceNavbarVisible = useHeaderControllerStore(
    (state) => state.setForceNavbarVisible
  );

  const addOpenMenu = useMenuControllerStore((state) => state.addOpenMenu);

  useEffect(() => {
    window.onscroll = () => {
      setNavbarVisible(window.scrollY > 100);
    };
  }, []);

  return (
    <>
      <header
        className={`z-40 fixed w-full flex justify-center duration-200 ${
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
                addOpenMenu("locations");
                setForceNavbarVisible(true);
              }}
            >
              Locations <BiChevronDown className="text-xl" />
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                addOpenMenu("profile");
                setForceNavbarVisible(true);
              }}
            >
              Profile <FaRegUser className="text-xl" />
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                addOpenMenu("mainMenu");
                setForceNavbarVisible(true);
              }}
            >
              Menu <HiMenu className="text-xl" />
            </li>
          </ul>
        </nav>
      </header>

      {/* move these */}
      {/* Locations Card */}
      {/* <ProfilePopup isVisible={profileOpen} /> */}
      {/* Menu */}
    </>
  );
};
