import { ReactElement } from "react";
import { getSortedPostsData } from "@/library/posts";
import styles from "@/styles/css/List.module.css";
import ListCard from "@/components/ListCard";
import Grid from "./common/Grid";

const List = (): ReactElement => {
  const portfolios = getSortedPostsData();

  return (
    <div className={`list-wrap ${styles.list_wrap}`}>
      <h1 className={styles.h1}>MUST READ</h1>
      <Grid
        itemPerLine={4}
        rowSpacing={20}
        columnSpacing={40}
        direction={"row"}
      >
        {portfolios.map((portfolio) => (
          <ListCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </Grid>
    </div>
  );
};

export default List;
