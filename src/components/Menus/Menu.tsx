import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { FC, ReactNode, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { BackgroundDim } from "../BackgroundDim";

export const Menu: FC<{
  title: string;
  name: MenuNames;
  large?: boolean;
  children: ReactNode;
}> = ({ title, name, large, children }) => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const removeOpenMenu = useMenuControllerStore(
    (state) => state.removeOpenMenu
  );

  const open = openMenus.includes(name);

  return (
    <>
      <main
        className={`fixed ${
          // Large menus are double the size of normal menus, and their closing animation differs to compoensate
          large ? "w-[48rem]" : "w-96"
        }  h-screen bg-white px-4 py-6 flex flex-col gap-4 duration-300 overflow-auto ${
          open ? "right-0" : large ? "-right-[48rem]" : "-right-96"
        }`}
        style={{
          zIndex: 100 + openMenus.indexOf(name) * 2 + 1,
        }}
      >
        <section className="flex justify-between">
          <h2>{title}</h2>
          <div
            className="cursor-pointer bg-secondary rounded-full p-1.5 h-fit"
            onClick={() => removeOpenMenu(name)}
          >
            <MdClose className="text-xl" />
          </div>
        </section>
        {children}
      </main>
      <BackgroundDim
        menu={name}
        style={{
          zIndex: 100 + openMenus.indexOf(name) * 2,
        }}
      />
    </>
  );
};
