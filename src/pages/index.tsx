import { Pill } from "@/components/Pill";
import { TeasersCard } from "@/components/TeasersCard";

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
      <section>{/* <RelatedDeals></RelatedDeals> */}</section>
      <section>
        <h2>What happens at Comwell Hotels</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="flex gap-3 ">
          <TeasersCard
            heading={"Book ophold og spar"}
            label={"Label"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            imageUrl={
              "https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-juniorsuite.jpg/cc2c38d38934a12bc46749023521128e.jpg"
            }
          />
          <TeasersCard
            heading={"Skal vi holde dit næste event?"}
            label={"Label"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            imageUrl={
              "https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-juniorsuite.jpg/cc2c38d38934a12bc46749023521128e.jpg"
            }
          />
          <TeasersCard
            heading={"Lorem ipsum dolor sit amet"}
            label={"Label"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            imageUrl={
              "https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-juniorsuite.jpg/cc2c38d38934a12bc46749023521128e.jpg"
            }
          />
        </div>
      </section>
      <br />
      <Link href="/test">Test page</Link>
    </main>
  );
};

export default Home;
