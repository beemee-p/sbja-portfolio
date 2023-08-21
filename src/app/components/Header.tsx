"use client";
import { ReactElement, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Menu from "@/app/components/Menu";
import styles from "@/app/styles/css/Header.module.css";

const Header = (): ReactElement => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <nav className={styles.header}>
        <Link
          className={`${styles.logo} ${isMenu ? styles.on : styles.off}`}
          onClick={() => isMenu && setIsMenu(false)}
          href="/"
        >
          SBJA 🐣
        </Link>

        <div
          className={`${styles.menu_btn} ${isMenu ? styles.on : styles.off}`}
          onClick={() => setIsMenu(!isMenu)}
        >
          {isMenu ? "CLOSE" : "MENU"}

          <AiOutlineMenu
            className={styles.menu_icon}
            size={"24"}
            color={`${isMenu ? "#ffffff" : "#000000"} `}
          />
        </div>
        <Menu isMenu={isMenu} close={() => setIsMenu(false)} />
      </nav>
    </>
  );
};

export default Header;
