type FooterContactListItemProps = {
  title: string;
  phone: string;
  email: string;
};

export const FooterContactListItem = ({
  title,
  phone,
  email,
}: FooterContactListItemProps) => {
  return (
    <li>
      <p className="font-semibold mb-2">{title}</p>
      <p className="font-medium">{phone}</p>
      <p className="font-medium">{email}</p>
    </li>
  );
};
