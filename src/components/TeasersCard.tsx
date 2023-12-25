import React from "react";
const img =
  "https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckp/vaerelser/comwell-kellers-park-juniorsuite.jpg/cc2c38d38934a12bc46749023521128e.jpg";

type TeasersCardProps = {
  heading: string;
  label: string;
  paragraph: string;
  imageUrl: string;
};

export const TeasersCard = ({
  heading,
  label,
  paragraph,
  imageUrl,
}: TeasersCardProps) => {
  return (
    <div className="max-w-sm w-[416px] h-[590px] rounded-xl cursor-pointer group overflow-hidden relative">
      <div className=" flex flex-col justify-end text-white h-full   ">
        <span className="mb-auto w-fit bg-white text-black font-semibold uppercase text-xs px-2 py-0.5 rounded-2xl ml-4 mt-4">
          {label}
        </span>
        <div
          className="p-4 rounded-b-lg"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
          }}
        >
          <h3 className="text-3xl">{heading}</h3>
          <p className="text-xs">{paragraph}</p>
        </div>
      </div>
      <div
        className="bg-cover absolute top-0 left-0 w-full h-full -z-10 group-hover:scale-105 duration-300"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      />
    </div>
  );
};
