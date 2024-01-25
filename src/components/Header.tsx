"use client";
import { ReactElement, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Menu from "@/components/Menu";
import { useDeviceContext } from "@/components/DeviceContext";
import { PAGE_TYPE } from "@/utils/Constants";
import styles from "@/styles/css/Header.module.css";

interface HeaderProps {
  pageType: PAGE_TYPE;
}

const Header = (props: HeaderProps): ReactElement => {
  const router = useRouter();
  const { portfolioID } = useParams();
  const { isMobile } = useDeviceContext();
  const [isMenu, setIsMenu] = useState(false);

  function handleMoveBack(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    router.back();
  }

  return (
    <header className={`${styles.header}`}>
      {portfolioID && (
        <Link
          className={styles.back_btn}
          href="/"
          onClick={(e) => portfolioID && handleMoveBack(e)}
        >
          <MdArrowBackIosNew size={"20"} />
        </Link>
      )}

      <Link
        className={`${styles.logo} ${isMenu ? styles.on : styles.off}`}
        onClick={(e) => {
          isMenu && setIsMenu(false);
          portfolioID && handleMoveBack(e);
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
          size={isMobile ? "20" : "24"}
          color={`${isMenu ? "#ffffff" : "#000000"} `}
        />
      </div>

      {isMenu && (
        <Menu
          isMenu={isMenu}
          isPortfolio={!!portfolioID}
          close={() => setIsMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;
