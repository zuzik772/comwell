import React, { FC } from "react";

type HotelCardProps = {
  imgSrc: string;
  heading: string;
  bulletPoint: string;
};

export const HotelCard: FC<HotelCardProps> = ({
  imgSrc,
  heading,
  bulletPoint,
}) => {
  return (
    <div>
      <img className="w-full h-1/4 rounded-lg" src={imgSrc} />
      <div className="flex">
        <div className="mt-3.5 w-4/5">
          <h1 className="text-xl">{heading}</h1>
          <ul className="list-disc opacity-[0.65] body-small mt-2 px-4">
            <li>{bulletPoint}</li>
            <li>{bulletPoint}</li>
            <li>{bulletPoint}</li>
          </ul>
        </div>
        <div className="self-end">
          <button className="label block rounded-full px-3 py-1.5 text-white font-semibold bg-primary whitespace-nowrap">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
