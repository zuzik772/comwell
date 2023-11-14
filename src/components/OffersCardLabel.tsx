import { OffersCard } from "./OffersCard";

type OffersCardLabelProps = {
  label: string;
  labelDesc: string;
};

export const OffersCardLabel = ({ label, labelDesc }: OffersCardLabelProps) => {
  return (
    <div className="uppercase flex gap-2 items-center text-xs font-semibold">
      <span className="bg-gray-600 text-white px-3 py-1.5 rounded-3xl">
        {label}
      </span>
      <span className="text-gray-300">|</span>
      <p>{labelDesc}</p>
    </div>
  );
};
