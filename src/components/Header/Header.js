import React, { useEffect, useState } from "react";
import HamburgerOpenIcon from "../../../public/hamburger_open.svg";
import HamburgerCloseIcon from "../../../public/hamburger_close.svg";
import Link from "next/link";
import { useRouter } from "next/router";

function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const toggleOpen = () => setIsOpen((prevOpen) => !prevOpen);
  return (
    <div className="pt-[96px] flex justify-center bg-light">
      <nav className="px-[24px] md:pl-[39px] md-pr-[42px] md:max-w-[1000px] flex flex-wrap top-0 w-full h-[96px] items-center fixed z-10">
        <Link href="/" className="flex items-center">
          <img
            className="mr-[16px]"
            src={"/header_icon.png"}
            alt={"Header image, semi-filled circle"}
          />
          <div className="tracking-[5px] uppercase font-bold text-[24px] text-dark-faded">
            Designo
          </div>
        </Link>

        <div className="uppercase hidden md:flex ml-auto mr-[42px] gap-[42px] text-dark-faded text-[14px] font-normal leading-[14px] tracking-[2px]">
          <Link
            className={`hover:text-primary-dark${
              router.pathname === "/about" ? " text-primary-dark" : ""
            }`}
            href="/about"
          >
            Our company
          </Link>
          <Link
            className={`hover:text-primary-dark${
              router.pathname === "/locations" ? " text-primary-dark" : ""
            }`}
            href="/locations"
          >
            Locations
          </Link>
          <Link
            className={`hover:text-primary-dark${
              router.pathname === "/contact" ? " text-primary-dark" : ""
            }`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="ml-auto cursor-pointer md:hidden" onClick={toggleOpen}>
          {isOpen ? <HamburgerCloseIcon /> : <HamburgerOpenIcon />}
        </div>
        {isOpen && (
          <div className="md:hidden flex gap-[32px] flex-col w-full fixed left-0 top-[96px] bg-dark py-[48px] px-[24px] text-[24px] uppercase text-light font-normal leading-[25px] tracking-[2px]">
            <Link
              className={`hover:text-primary-dark${
                router.pathname === "/about" ? " text-primary-dark" : ""
              }`}
              href="/about"
            >
              Our company
            </Link>
            <Link
              className={`hover:text-primary-dark${
                router.pathname === "/locations" ? " text-primary-dark" : ""
              }`}
              href="/locations"
            >
              Locations
            </Link>
            <Link
              className={`hover:text-primary-dark${
                router.pathname === "/contact" ? " text-primary-dark" : ""
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black opacity-50 top-[96px]"></div>
      )}
    </div>
  );
}

export default Header;