import styles from "@/app/styles/css/Header.module.css";
import { ReactElement } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = (): ReactElement => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>SBJA 🐣</div>
      <div className={styles.hamburgerButton}>
        <AiOutlineMenu size={"24"} color={"#000000"} />
      </div>
    </nav>
  );
};

export default Header;
