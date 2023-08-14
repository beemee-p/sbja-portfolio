import { ReactElement } from "react";
import styles from "@/app/styles/css/Menu.module.css";

const menuList = ["포트폴리오", "블로그"];
interface MenuProps {
  isMenu: boolean;
}

const Menu = (props: MenuProps): ReactElement => {
  return (
    <div className={`${styles.menu} ${props.isMenu ? styles.on : styles.off}`}>
      <ul className={styles.menu_list}>
        {menuList.map((menu, index) => (
          <li key={index} className={styles.menu_item}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
