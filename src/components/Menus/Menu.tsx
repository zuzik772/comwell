import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { FC, ReactNode } from "react";
import { MdClose } from "react-icons/md";

export const Menu: FC<{
  title: string;
  name: MenuNames;
  children: ReactNode;
}> = ({ title, name, children }) => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const removeOpenMenu = useMenuControllerStore(
    (state) => state.removeOpenMenu
  );

  const open = openMenus.includes(name);
  return (
    <main
      className={`fixed w-96 h-screen bg-white z-[100] px-4 py-6 flex flex-col gap-4 duration-300 overflow-auto ${
        open ? "right-0" : "-right-96"
      }`}
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
  );
};
