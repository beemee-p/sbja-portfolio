import { ReactElement, useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import styles from "@/styles/css/Menu.module.css";
import { useRouter } from "next/router";

const menuList = [
  { title: "PORTFOLIO", url: `/portfolio` },
  {
    title: (
      <>
        BLOG <TbExternalLink />
      </>
    ),
    url: `https://devbirdfeet.tistory.com`,
  },
  {
    title: (
      <>
        GITHUB <TbExternalLink />
      </>
    ),
    url: `https://github.com/beemee-p`,
  },
];
interface MenuProps {
  isMenu: boolean;
  close: () => void;
}

const Menu = (props: MenuProps): ReactElement => {
  function handleClose(e: React.MouseEvent<HTMLElement>) {
    props.close();
  }

  return (
    <div
      className={`${styles.menu} ${props.isMenu ? styles.on : styles.off}`}
      onClick={(e) => handleClose(e)}
    >
      <div className={styles.menu_list}>
        {menuList.map((menu, index) => (
          <Link key={index} className={styles.menu_item} href={menu.url}>
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
