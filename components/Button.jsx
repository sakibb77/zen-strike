import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const buttonVariants = cva("px-4 py-3 font-semibold rounded-md duration-300", {
  variants: {
    color: {
      green: "bg-accent1 text-dark hover:bg-accent1/90",
      red: "bg-accent2 text-dark hover:bg-accent2/90",
      outline: "bg-transparent text-light hover:bg-dark/10 border border-light",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

const Button = ({ href, bText, target, color }) => {
  return (
    <div>
      <Link
        href={href}
        target={target}
        className={clsx(buttonVariants({ color }))}
      >
        {bText}
      </Link>
    </div>
  );
};

export default Button;
