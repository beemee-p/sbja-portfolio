import { ReactElement } from "react";
import { getSortedPostsData } from "@/lib/posts";
import styles from "@/app/styles/css/List.module.css";
import ListCard from "./ListCard";

const List = (): ReactElement => {
  const posts = getSortedPostsData();

  return (
    <div className={styles.list}>
      <h1 className={styles.h1}>MUST READ</h1>

      <ul>
        {posts.map((post) => (
          <ListCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default List;
