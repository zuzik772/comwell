import { FC } from "react";
import { Input } from "./Input";
import { TextLink } from "./TextLink";
import { Button } from "./Button";

type ProfilePopupProps = {
  isVisible: boolean;
};

export const ProfilePopup: FC<ProfilePopupProps> = ({ isVisible }) => {
  return (
    <div
      className={`bg-white fixed right-32 top-28 flex flex-col rounded-xl w-72 duration-200 z-50 ${
        !isVisible && "opacity-0 pointer-events-none"
      }`}
    >
      <section className="border-b border-gray-300 py-6 px-4 flex flex-col gap-2">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <div className="text-sm text-gray-700 font-medium">
          <p>Forgot your password?</p>
          <TextLink onClick={() => {}}>Reset password</TextLink>
          <p>Don't have an account?</p>
          <TextLink onClick={() => {}}>Sign up for Comwell Club</TextLink>
        </div>
      </section>
      <section className="py-6 px-4">
        <Button>Log in</Button>
      </section>
    </div>
  );
};
