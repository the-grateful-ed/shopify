"use client";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/ui/search";
import { AnimatePresence, motion } from "framer-motion";
import { MenuSquare, XSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <nav
      className="relative flex w-full flex-nowrap items-center justify-between bg-background py-2 lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="lg:hidden p-6"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarSupportedContent15"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <!-- Hamburger icon --> */}

          {isOpen ? (
            <XSquare className="h-12 w-12" />
          ) : (
            <MenuSquare className="h-12 w-12" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-[70px] left-0 right-0 w-full mt-2 py-2 bg-white rounded-lg shadow-xl lg:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
            >
              {/* <!-- Dropdown menu items --> */}
              <ul className="w-full space-y-2 mx-auto px-6">
                <li>
                  <Button className="w-full">
                    <Link href="#" className="text-xl">
                      Menu Item 2
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button className="w-full">
                    <Link href="#" className="text-xl">
                      Menu Item 2
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button className="w-full">
                    <Link href="#" className="text-xl">
                      Menu Item 2
                    </Link>
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="ml-2 md:mr-2">
          <Button variant={"link"}>
            <Link className="text-2xl" href="#">
              Navbar
            </Link>
          </Button>
        </div>

        {/* <!-- Collapsible navbar container --> */}
        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent15"
          data-te-collapse-item
        >
          {/* <!-- Left links --> */}
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
            data-te-navbar-nav-ref
          >
            {/* <!-- Home link --> */}
            <li
              className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
              data-te-nav-item-ref
            >
              <Button variant={"link"}>
                <Link
                  className="text-xl"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref
                >
                  Home
                </Link>
              </Button>
            </li>
            {/* <!-- Link --> */}
            <li
              className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
              data-te-nav-item-ref
            >
              <Button variant={"link"}>
                <Link className="text-xl" href="#" data-te-nav-link-ref>
                  Link
                </Link>
              </Button>
            </li>
          </ul>
          <div className="w-[300px] lg:pr-2">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
