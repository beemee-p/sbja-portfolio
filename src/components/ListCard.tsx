import { ReactElement } from "react";
import { getFormattedDate } from "@/library/getFormattedDate";
import { Post } from "@/app/types";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/css/ListCard.module.css";
interface ListCardProps {
  post: Post;
}

const ListCard = (props: ListCardProps): ReactElement => {
  const { id, title, date, thumbnail } = props.post;
  const createdAt = getFormattedDate(date);

  return (
    <li className={styles.list_card}>
      <Link href={`/portfolio/${id}`}>
        {thumbnail && (
          <Image alt="thumbnail" src={thumbnail} width={100} height={100} />
        )}

        <div>{title}</div>
        <p>{createdAt}</p>
      </Link>
    </li>
  );
};

export default ListCard;
