type FooterHeadingsProps = {
  heading: string;
};

export const FooterHeading = ({ heading }: FooterHeadingsProps) => {
  return (
    <h6
      className={
        "text-xs font-semibold leading-3 tracking-wider text-left uppercase text-white mb-4"
      }
    >
      {heading}
    </h6>
  );
};
