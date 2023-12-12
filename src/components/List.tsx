import { ReactElement } from "react";
import { getSortedPostsData } from "@/library/posts";
import styles from "@/styles/css/List.module.css";
import ListCard from "@/components/ListCard";
import GridList from "./common/GridList";

const List = (): ReactElement => {
  const posts = getSortedPostsData();

  return (
    <div className={styles.list}>
      <h1 className={styles.h1}>MUST READ</h1>

      <GridList
        itemPerLine={3}
        rowSpacing={20}
        columnSpacing={40}
        direction={"row"}
      >
        {posts.map((post) => (
          <ListCard key={post.id} post={post} />
        ))}
      </GridList>
    </div>
  );
};

export default List;
