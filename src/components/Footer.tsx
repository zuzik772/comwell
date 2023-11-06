import { FooterListItem } from "./FooterListItem";
import Link from "next/link";
import { FooterContactListItem } from "./FooterContactListItem";
import Image from "next/image";
import logo from "../img/Logo.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { FooterHeadings } from "./FooterHeadings";
import { FooterSocialMedia } from "./FooterSocialMedia";
import { IconBaseProps } from "react-icons/lib/esm/iconBase";

export const Footer = () => {
  const titles = [
    "Offer",
    "Meeting & Conference",
    "Restaurant & Party",
    "Spa",
    "Contact",
    "Comwell Club",
    "Gift card",
    "Company agreement",
    "News",
  ];
  const links = [
    "News & press",
    "Jobs & careers",
    "Trading conditions",
    "Cancellation conditions",
    "Personal data policy",
    "Smiley scheme",
  ];
  return (
    <footer className="text-white bg-gray-800">
      <nav className="flex gap-36 p-20">
        <ul>
          {titles.map((title) => {
            return (
              <FooterListItem customClass="text-3xl">{title}</FooterListItem>
            );
          })}
        </ul>
        <ul>
          <FooterHeadings heading="contact" />
          <Link href={""}>
            <li>Contact Comwells Departments</li>
          </Link>
          <Link href={""}>
            <li>Contact Hotels</li>
          </Link>
        </ul>
        <ul>
          <FooterHeadings heading="book" />
          <div className="flex flex-col gap-8">
            <FooterContactListItem
              title={"Book accommodation"}
              phone={"Phone: (+45) 70 274 274 press 2"}
              email={"Email: booking@comwell.com"}
            />
            <FooterContactListItem
              title={"Book conference"}
              phone={"Phone: (+45) 70 274 274 press 1"}
              email={"Email: konference@comwell.com"}
            />
          </div>
        </ul>
        <ul>
          <FooterHeadings heading="links" />

          {links.map((link) => {
            return (
              <FooterListItem customClass="text-sm leading-6">
                {link}
              </FooterListItem>
            );
          })}
        </ul>
      </nav>

      <nav className="backdrop-brightness-75 flex bg-grey-600 justify-between px-20 py-10">
        <Link href={""}>
          <Image className="invert" src={logo} alt={""}></Image>
        </Link>
        <ul className="flex justify-between w-1/4">
          <FooterSocialMedia
            title={"Facebook"}
            icon={<AiFillFacebook size={22} className="mr-1" />}
          />
          <FooterSocialMedia
            title={"LinkedIn"}
            icon={<AiFillLinkedin size={22} className="ml-2" />}
          />
          <FooterSocialMedia
            title={"Instagram"}
            icon={<AiFillInstagram size={22} className="m-2" />}
          />
        </ul>
        <button className="flex justify-center items-center">
          <GrLanguage />
          English
        </button>
      </nav>
    </footer>
  );
};
