import React, { ReactElement } from "react";
import Link from "next/link";

const Header = (): ReactElement => {
  return (
    <nav style={{ background: "powderblue" }}>
      <h2>
        This is Header <Link href="https://devbirdfeet.tistory.com/">🐣</Link>
      </h2>
    </nav>
  );
};

export default Header;
