import { ReactElement } from "react";
import styles from "@/styles/css/Footer.module.css";

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer_wrap}>
      <div className={styles.footer_title}>SBJA</div>
      <div className={styles.footer_desc}>
        devbirdfeet.vercel.app is operated by SBJA
      </div>
    </footer>
  );
};

export default Footer;
