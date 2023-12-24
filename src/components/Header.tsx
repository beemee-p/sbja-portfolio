"use client";
import { ReactElement, useState } from "react";
import { useParams } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import Menu from "@/components/Menu";
import styles from "@/styles/css/Header.module.css";

const Header = (): ReactElement => {
  const { portfolioID } = useParams();
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className={styles.header}>
      {portfolioID && (
        <Link className={styles.back_btn} href="/">
          <MdArrowBackIosNew size={"20"} />
        </Link>
      )}

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

      {isMenu && <Menu isMenu={isMenu} close={() => setIsMenu(false)} />}
    </header>
  );
};

export default Header;
