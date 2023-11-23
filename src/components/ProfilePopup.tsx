import { FC, useState } from "react";
import { Input } from "./Input";
import { TextLink } from "./TextLink";
import { Button } from "./Button";
import { useMenuControllerStore } from "@/stores/menuControllerStore";

export const ProfilePopup: FC = () => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // TODO: Login logic - Will be handled on seperate branch
  };

  return (
    <div
      className={`bg-white fixed right-32 top-28 flex flex-col rounded-xl w-72 duration-200 z-50 ${
        !openMenus.includes("profile") && "opacity-0 pointer-events-none"
      }`}
    >
      <section className="border-b border-gray-300 py-6 px-4 flex flex-col gap-2">
        <Input
          placeholder="Email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="text-sm text-gray-700 font-medium">
          <p>Forgot your password?</p>
          <TextLink onClick={() => null}>Reset password</TextLink>
          <p>Don't have an account?</p>
          <TextLink onClick={() => null}>Sign up for Comwell Club</TextLink>
        </div>
      </section>
      <section className="py-6 px-4">
        <Button onClick={handleLogin} disabled={!(email && password)}>
          Log in
        </Button>
      </section>
    </div>
  );
};
