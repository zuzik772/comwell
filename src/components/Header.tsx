import React from "react";
import logo from "../img/Logo.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <nav>
        <a>
          <Image src={logo} alt={""} />
        </a>
        <ul>
          <li>Locations</li>
          <li>Profile</li>
          <li>Menu</li>
        </ul>
      </nav>
    </header>
  );
};
