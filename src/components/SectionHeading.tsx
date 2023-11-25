type SectionHeadingProps = {
  heading: string;
};

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <h2
      className={
        "text-xl font-semibold leading-3 tracking-wider text-left uppercase mb-4 text-black"
      }
    >
      {heading}
    </h2>
  );
};
