import { Pill } from "@/components/Pill";
import { SectionHeading } from "@/components/SectionHeading";
import { OffersCard } from "@/components/OffersCard";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [selectedPill, setSelectedPill] = useState<
    "Accommodation" | "Meeting & Conference" | "Banquet"
  >("Accommodation");
  return (
    <main>
      <section>
        <div>
          <h2>Check in at Comwell and discover Denmark</h2>
          <div>
            <Pill
              selected={selectedPill === "Accommodation"}
              onClick={() => setSelectedPill("Accommodation")}
            >
              Accommodation
            </Pill>
            <Pill
              selected={selectedPill === "Meeting & Conference"}
              onClick={() => setSelectedPill("Meeting & Conference")}
            >
              Meeting & Conference
            </Pill>
            <Pill
              selected={selectedPill === "Banquet"}
              onClick={() => setSelectedPill("Banquet")}
            >
              Banquet
            </Pill>
          </div>

          <p>You have selcted {selectedPill}</p>
        </div>
      </section>
      <section>
        <SectionHeading heading="Offers & Experiences" />
        <div className="flex gap-4">
          <OffersCard
            title="Overnight stay with breakfast buffet"
            description="Accommodation with large breakfast buffet with organic and local specialties"
            price={1299}
            specialPrice={1249}
            imageSrc="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/mad/comwell-morgenmad.jpg/49a6cf781f055baf9100b8f8a37e61a0.webp"
            imageAlt="Breakfast offer"
            label="Overnight stay"
            labelDesc="The safe choice"
          />
          <OffersCard
            title="Spadelight at two Comwell-hotels"
            description="Enjoy a spa stay at one of our two spa hotels in Denmark. This stay is including free AquaSpa access, 3-course dinner, accommodation and breakfast buffet."
            price={1999}
            specialPrice={1949}
            imageSrc="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/spa/comwell-borupgaard-spa-01.jpg/bf9ba34bdf7b7c1bfd3a7ea0f55907c7.webp"
            imageAlt="Spa offer"
            label="Spa"
            labelDesc="Pleasure for all the senses"
          />
          <OffersCard
            title="Blissful Break"
            description="Cosy afternoon coffee with cake - and later 3-course dinner."
            price={1099}
            specialPrice={1049}
            imageSrc="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/restaurant/comwell-borupgaard-restaurant-skaldyrsaften-01.jpg/fc8eec489f373ea7c5f6afe4dbff09bb.webp"
            imageAlt="Dinner offer"
            label="Gastronomy"
            labelDesc="Afternoon fun and celebration"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
