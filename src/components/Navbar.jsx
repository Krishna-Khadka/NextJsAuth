import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 py-2">
      <div className="container flex items-center justify-between">
        <Link href="./">Logo</Link>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="./sign-in"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
