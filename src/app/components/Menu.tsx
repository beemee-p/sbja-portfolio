import { ReactElement } from "react";
import styles from "@/app/styles/css/Menu.module.css";

interface MenuProps {
  isMenu: boolean;
}
const Menu = (props: MenuProps): ReactElement => {
  return (
    <div className={`${styles.menu} ${props.isMenu ? styles.on : styles.off}`}>
      Menu
    </div>
  );
};

export default Menu;
