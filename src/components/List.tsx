import { ReactElement } from "react";
import { getSortedPostsData } from "@/library/posts";
import styles from "@/styles/css/List.module.css";
import ListCard from "@/components/ListCard";
import Grid from "./common/Grid";

const List = (): ReactElement => {
  const posts = getSortedPostsData();

  return (
    <div className={styles.list}>
      <h1 className={styles.h1}>MUST READ</h1>

      <Grid
        itemPerLine={3}
        rowSpacing={20}
        columnSpacing={40}
        direction={"row"}
      >
        {posts.map((post) => (
          <ListCard key={post.id} post={post} />
        ))}
      </Grid>
    </div>
  );
};

export default List;
