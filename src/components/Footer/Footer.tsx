import { FooterNavigation } from "./FooterNavigation";
import Link from "next/link";
import { FooterContactListItem } from "./FooterContactListItem";
import Image from "next/image";
import logo from "../../img/Logo.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { FC, ReactNode, useState } from "react";
import { FooterHeading } from "./FooterHeadings";
import { FooterSocialMedia } from "./FooterSocialMedia";
import { FooterLinks } from "./FooterLinks";

export const Footer: FC = () => {
  const [hoveredTitle, setHoveredTitle] = useState<ReactNode | null>("");
  const handleHover = (title: ReactNode | null) => {
    setHoveredTitle(title);
  };
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
              <FooterNavigation
                key={title}
                handleHover={handleHover}
                className={
                  hoveredTitle === title || hoveredTitle === null
                    ? "opacity-100"
                    : "opacity-50"
                }
              >
                {title}
              </FooterNavigation>
            );
          })}
        </ul>
        <ul>
          <FooterHeading heading="contact" />
          <Link href={""}>
            <li>Contact Comwells Departments</li>
          </Link>
          <Link href={""}>
            <li>Contact Hotels</li>
          </Link>
        </ul>
        <ul>
          <FooterHeading heading="book" />
          <div className="flex flex-col gap-8">
            <FooterContactListItem
              title={"Book accommodation"}
              phone={'Phone: (+45) 70 274 274 | Press "2"'}
              email={"Email: booking@comwell.com"}
            />
            <FooterContactListItem
              title={"Book conference"}
              phone={'Phone: (+45) 70 274 274 | Press "1"'}
              email={"Email: konference@comwell.com"}
            />
          </div>
        </ul>
        <ul>
          <FooterHeading heading="links" />

          {links.map((link) => {
            return <FooterLinks key={link}>{link}</FooterLinks>;
          })}
        </ul>
      </nav>

      <nav className="backdrop-brightness-75 flex bg-grey-600 justify-between px-20 py-10">
        <Link href={""}>
          <Image className="invert" src={logo} alt={""}></Image>
        </Link>
        <ul className="flex justify-between w-1/4">
          <FooterSocialMedia
            title="Facebook"
            link="https://www.facebook.com"
            icon={<AiFillFacebook size={22} />}
          />
          <FooterSocialMedia
            title="LinkedIn"
            link="https://www.linkedin.com"
            icon={<AiFillLinkedin size={22} />}
          />
          <FooterSocialMedia
            title="Instagram"
            link="https://www.instagram.com"
            icon={<AiFillInstagram size={22} />}
          />
        </ul>
        <button className="flex justify-center items-center gap-1">
          <MdLanguage />
          English
        </button>
      </nav>
    </footer>
  );
};
