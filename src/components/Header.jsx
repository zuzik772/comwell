import React from "react";
import logo from "../img/Logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav>
        <a>
          <Image src={logo} />
        </a>
        <ul>
          <li>Locations</li>
          <li>Profile</li>
          <li>Menu</li>
        </ul>
      </nav>
    </header>
  );
}
