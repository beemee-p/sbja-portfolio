"use client";
import { ReactElement } from "react";
import { PAGE_TYPE } from "@/utils/Constants";
import styles from "@/styles/css/Footer.module.css";

interface FooterProps {
  pageType: PAGE_TYPE;
}

const Footer = (props: FooterProps): ReactElement => {
  return (
    <footer
      className={`${styles.footer_wrap} ${
        props.pageType === PAGE_TYPE.MAIN
          ? styles.main
          : props.pageType === PAGE_TYPE.DETAIL
          ? styles.detail
          : ""
      }`}
    >
      <div className={styles.footer_title}>SBJA</div>
      <div className={styles.footer_desc}>
        devbirdfeet.vercel.app is operated by SBJA
      </div>
    </footer>
  );
};

export default Footer;
