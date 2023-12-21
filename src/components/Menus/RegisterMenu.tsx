import { FC, MouseEvent, useState } from "react";
import { Menu } from "./Menu";
import { useLoginManagerStore } from "@/stores/loginManagerStore";
import { Input } from "../Input";
import { Button } from "../Button";
import { useMenuControllerStore } from "@/stores/menuControllerStore";

export const RegisterMenu: FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState<number | null>(null);

  const setToken = useLoginManagerStore((state) => state.setToken);
  const setOpenMenus = useMenuControllerStore((state) => state.setOpenMenus);

  const handleRegister = async () => {
    if (password !== confirmPassword) return alert("Passwords do not match");

    const response = await fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password, zipCode, phone }),
    });
    const result = await response.json();
    if (response.ok) {
      setToken(result.access_token);
      setOpenMenus([]);
    } else alert(result.error);
  };

  return (
    <Menu title="Sign up for Comwell Club" name="register">
      <section className="flex flex-col gap-16">
        <p className="text-sm font-medium">
          Become a member of Comwell Club for free and earn points everytime you
          stay with us. You'll also receive 25 points when you sign up
        </p>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Zip Code"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
          />
          <Input
            type="number"
            placeholder="Phone"
            value={phone || ""}
            onChange={(event) => setPhone(Number(event.target.value))}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <p
            className={`text-red-500 ${
              password === confirmPassword && "hidden"
            }`}
          >
            Passwords don't match!
          </p>
        </div>
      </section>
      <section className="absolute bottom-0 left-0 w-full h-24 border-t border-gray-300 flex justify-between items-center px-4">
        <div className="flex gap-8 items-center w-full">
          <Button
            fullWidth
            disabled={
              !(
                fullName &&
                email &&
                zipCode &&
                phone &&
                password &&
                confirmPassword &&
                password === confirmPassword
              )
            }
            onClick={handleRegister}
          >
            Continue
          </Button>
        </div>
      </section>
    </Menu>
  );
};
