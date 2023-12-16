"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [isSideMenuOpen, setMenu] = useState(false);
  const navlinks = [
    {
      labe: "Collections",
      link: "#",
    },
    {
      labe: "Men",
      link: "#",
    },
    {
      labe: "About",
      link: "#",
    },
    {
      labe: "Contact",
      link: "#",
    },
  ];
  return (
    // <main>
    //   <nav className="flex justify-between px-8 items-center py-6">
    //     <section className="flex items-center gap-4">
    //       {/* menu */}
    //       <Menu
    //         size={32}
    //         onClick={() => setMenu(true)}
    //         className="text-3xl cursor-pointer lg:hidden"
    //       />
    //       {/* logo */}
    //       <Link href="/" className="text-4xl">
    //         logo
    //       </Link>
    //     </section>
    //     {navlinks.map((d, i) => (
    //       <Link
    //         key={i}
    //         className="hidden lg:block  text-gray-400 hover:text-black"
    //         href={d.link}
    //       >
    //         {d.labe}
    //       </Link>
    //     ))}
    <main>
      <nav className="flex justify-between px-8 items-center py-6   ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <Menu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/"} className="text-4xl font-mono">
              logo
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block  text-gray-400 hover:text-black"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <X
              size={32}
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>
        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart iccon */}
          <ShoppingCart size={32} />
          {/* user image */}
          <Avatar className="z-[-10]">
            <AvatarImage
              src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Annie&radius=50"
              alt="avatar image"
            />
            <AvatarFallback>EE</AvatarFallback>
          </Avatar>
        </section>
      </nav>
      <hr />
    </main>
  );
}
