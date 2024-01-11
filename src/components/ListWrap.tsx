import { ReactElement } from "react";
import { getSortedPostsData } from "@/library/posts";
import styles from "@/styles/css/ListWrap.module.css";
import List from "./List";

const ListWrap = (): ReactElement => {
  const portfolios = getSortedPostsData();

  return (
    <div className={`list-wrap ${styles.list_wrap}`}>
      <h1 className={styles.h1}>PORTFOLIOS</h1>
      <List portfolios={portfolios} />
    </div>
  );
};

export default ListWrap;
