import { ReactElement } from "react";
import { getSortedPostsData } from "@/library/posts";
import styles from "@/styles/css/List.module.css";
import ListCard from "@/components/ListCard";

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
