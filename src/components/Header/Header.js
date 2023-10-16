import React, { useEffect, useRef, useState } from "react";
import HamburgerOpenIcon from "../../../public/hamburger_open.svg";
import HamburgerCloseIcon from "../../../public/hamburger_close.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useOutsideAlerter } from "@/hooks/useOutsideAlerter";
import logoDark from "../../../public/logo-dark.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const headerRef = useRef(null);
  useOutsideAlerter(headerRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const toggleOpen = () => setIsOpen((prevOpen) => !prevOpen);
  return (
    <header className="w-full bg-light fixed z-30 left:0 right: 0 h-[96px]">
      <div ref={headerRef} className="flex justify-center">
        <nav className="bg-light md:max-w-container flex flex-wrap top-0 w-full h-[96px] items-center fixed z-30 px-small md:px-standard">
          <Link
            href="/"
            className="flex items-center text-dark-faded hover:text-primary-dark"
          >
            <img src={logoDark.src} className="h-[24px]" />
          </Link>

          <div className="uppercase hidden md:flex ml-auto gap-large text-dark-faded text-[14px] font-normal leading-[14px] tracking-[2px]">
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
          <div
            className="ml-auto cursor-pointer md:hidden"
            onClick={toggleOpen}
          >
            {isOpen ? <HamburgerCloseIcon /> : <HamburgerOpenIcon />}
          </div>
          {isOpen && (
            <div className="md:hidden flex gap-[32px] flex-col w-full fixed left-0 top-[96px] bg-dark py-[48px] px-small text-[24px] uppercase text-light font-normal leading-[25px] tracking-[2px]">
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
      </div>
      {isOpen && (
        <div className="z-20 md:hidden fixed inset-0 bg-black opacity-50 top-[96px]"></div>
      )}
    </header>
  );
}

export default Header;
