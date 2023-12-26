import { FC, useState, MouseEvent, useEffect } from "react";
import { Input } from "../Input";
import { TextLink } from "../TextLink";
import { Button } from "../Button";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { useLoginManagerStore } from "@/stores/loginManagerStore";

import { getTokenInfo } from "@/services/getTokenInfo";
import { BackgroundDim } from "../BackgroundDim";

export const ProfilePopup: FC = () => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const addOpenMenu = useMenuControllerStore((state) => state.addOpenMenu);
  const removeOpenMenu = useMenuControllerStore(
    (state) => state.removeOpenMenu
  );

  const token = useLoginManagerStore((state) => state.token);
  const setToken = useLoginManagerStore((state) => state.setToken);
  const clearToken = useLoginManagerStore((state) => state.clearToken);

  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const response = await fetch("http://localhost:3001/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    if (response.ok) setToken(result.access_token);
    else alert(result.error);
  };

  const handleLogout = async () => {
    clearToken();
  };

  const tokenInfo = getTokenInfo(token);

  useEffect(() => {
    setLoggedIn(!!token);
  }, [token]);

  return (
    <>
      <div
        className={`bg-white fixed right-32 top-28 flex flex-col rounded-xl w-72 duration-200 z-50 ${
          !openMenus.includes("profile") && "opacity-0 pointer-events-none"
        }`}
      >
        {!loggedIn ? (
          <>
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
                <p>Don&apos;t have an account?</p>
                <TextLink
                  onClick={() => {
                    removeOpenMenu("profile");
                    addOpenMenu("register");
                  }}
                >
                  Sign up for Comwell Club
                </TextLink>
              </div>
            </section>
            <section className="py-6 px-4">
              <Button onClick={handleLogin} disabled={!(email && password)}>
                Log in
              </Button>
            </section>
          </>
        ) : (
          <>
            <section className="border-b border-gray-300 py-6 px-4 flex flex-col gap-2">
              <>
                {tokenInfo.email}
                <br />
                {tokenInfo.fullName}
                <br />
                {tokenInfo.phone}
              </>
            </section>
            <section className="py-6 px-4">
              <Button onClick={handleLogout}>Log out</Button>
            </section>
          </>
        )}
      </div>
      <BackgroundDim menu="profile" className="z-40" />
    </>
  );
};
