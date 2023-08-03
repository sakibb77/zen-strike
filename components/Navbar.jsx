import Link from "next/link";
import React from "react";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="h-[5rem] fixed left-0 right-0 top-0 border-b border-dark/10 backdrop-blur-lg shadow z-[100] bg-dark">
      <div className="wrapper w-full h-full flex justify-between items-center">
        {/* NAV LEFT */}
        <nav>
          <Link href="/" className="text-xl font-semibold link-item">
            zen <span className="text-accent1">strike</span>
          </Link>
        </nav>
        {/* NAV MID  */}
        <nav>
          <ul className="flex gap-3 items-center">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Products" className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT  */}

        <Button href="/subscribe" bText="subscribe" color="red" />
      </div>
    </header>
  );
};

export default Navbar;
