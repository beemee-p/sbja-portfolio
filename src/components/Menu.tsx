import { ReactElement, useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import styles from "@/styles/css/Menu.module.css";

interface MenuProps {
  isMenu: boolean;
  close: () => void;
}

const Menu = (props: MenuProps): ReactElement => {
  const menuList = [
    {
      title: "PORTFOLIO",
      linkProps: {
        onClick: handleMoveScroll,
        href: "/",
      },
    },
    {
      title: (
        <>
          BLOG <TbExternalLink />
        </>
      ),
      linkProps: {
        href: "https://devbirdfeet.tistory.com",
        target: "_blank",
      },
    },
    {
      title: (
        <>
          RESUME <TbExternalLink />
        </>
      ),
      linkProps: {
        href: "https://beemeep.notion.site/yuna-park-3043560342374634a8c051c4b8bbfe4c?pvs=4",
        target: "_blank",
      },
    },
    {
      title: (
        <>
          GITHUB <TbExternalLink />
        </>
      ),
      linkProps: {
        href: "https://github.com/beemee-p",
        target: "_blank",
      },
    },
  ];

  function handleClose(e: React.MouseEvent<HTMLElement>) {
    props.close();
  }

  function handleMoveScroll(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();
    const list = document.querySelector(".list-wrap") as HTMLDivElement | null;
    list?.scrollIntoView({ behavior: "smooth" });

    const offset: number | undefined = (list?.offsetTop as number) - 93;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
  return (
    <div
      className={`${styles.menu} ${props.isMenu ? styles.on : styles.off}`}
      onClick={(e) => handleClose(e)}
    >
      <div className={styles.menu_list}>
        {menuList.map((menu, index) => (
          <Link key={index} className={styles.menu_item} {...menu.linkProps}>
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
