import Image from "next/image";
import { OffersCardLabel } from "./OffersCardLabel";

type OffersCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  specialPrice: number;
  label: string;
  labelDesc: string;
};

export const OffersCard = ({
  title,
  description,
  price,
  specialPrice,
  imageSrc,
  imageAlt,
  label,
  labelDesc,
}: OffersCardProps) => {
  return (
    <div className="bg-gray-300 max-w-sm rounded-xl flex flex-col justify-between">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={384}
        height={384}
        className="rounded-t-xl"
      ></Image>
      <div className="p-4 flex grow flex-col gap-2 justify-between border-2 border-solid border-gray-300 rounded-xl">
        <div>
          <OffersCardLabel label={label} labelDesc={labelDesc} />
          <h3 className="text-xl font-semibold py-2">{title}</h3>
          <p className="text-sm font-medium">{description}</p>
        </div>
        <div className="flex gap-2 items-center justify-between pt-4">
          <p className="text-2xl font-semibold">{price} kr.</p>
          <p>
            <span className="text-gray-300">{specialPrice} with</span> Comwell
            Club
          </p>
        </div>
      </div>
    </div>
  );
};
