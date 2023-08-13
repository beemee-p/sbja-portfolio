import styles from "@/app/styles/css/Header.module.css";
import Link from "next/link";
import { ReactElement } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = (): ReactElement => {
  return (
    <nav className={styles.header}>
      <Link className={styles.logo} href="/">
        SBJA 🐣
      </Link>

      <div className={styles.menuBtn}>
        <AiOutlineMenu className={styles.menu} size={"24"} color={"#000000"} />
      </div>
    </nav>
  );
};

export default Header;
