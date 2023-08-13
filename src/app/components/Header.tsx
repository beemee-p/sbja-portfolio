"use client";
import styles from "@/app/styles/css/Header.module.css";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./Menu";

const Header = (): ReactElement => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <nav className={styles.header}>
        <Link className={styles.logo} href="/">
          SBJA 🐣
        </Link>

        <div className={styles.menu_btn} onClick={() => setIsMenu(!isMenu)}>
          MENU
          <AiOutlineMenu
            className={styles.menu_icon}
            size={"24"}
            color={"#000000"}
          />
        </div>
      </nav>
      <Menu isMenu={isMenu} />
    </>
  );
};

export default Header;
