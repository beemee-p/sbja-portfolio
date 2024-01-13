"use client";
import { ReactElement, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Menu from "@/components/Menu";
import styles from "@/styles/css/Header.module.css";

interface HeaderProps {
  isModal?: boolean;
}

const Header = ({ isModal = false }: HeaderProps): ReactElement => {
  const router = useRouter();
  const { portfolioID } = useParams();
  const [isMenu, setIsMenu] = useState(false);

  function handleClose(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    router.back();
  }

  return (
    <header
      className={`${styles.header} ${portfolioID ? styles.portfolio : ""}`}
    >
      {portfolioID && (
        <Link
          className={styles.back_btn}
          href="/"
          onClick={(e) => isModal && handleClose(e)}
        >
          <MdArrowBackIosNew size={"20"} />
        </Link>
      )}

      <Link
        className={`${styles.logo} ${isMenu ? styles.on : styles.off}`}
        onClick={(e) => {
          isMenu && setIsMenu(false);
          isModal && handleClose(e);
        }}
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
