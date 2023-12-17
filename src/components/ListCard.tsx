"use client";
import { ReactElement } from "react";
import { getFormattedDate } from "@/library/getFormattedDate";
import { Post } from "@/app/types";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/css/ListCard.module.css";
import { usePathname } from "next/navigation";

interface ListCardProps {
  post: Post;
}

const ListCard = (props: ListCardProps): ReactElement => {
  const { id, title, date, thumbnail } = props.post;
  const createdAt = getFormattedDate(date);

  return (
    <li className={styles.list_card}>
      <Link
        className={styles.list_card_link}
        href={{ pathname: `/portfolio/${id}` }}
      >
        {thumbnail && (
          <Image
            className={styles.list_card_img}
            alt="thumbnail"
            src={thumbnail}
            style={{ width: "100%", height: "100%" }}
            fill={true}
          />
        )}

        <div className={styles.list_card_text}>
          <h3 className={styles.list_card_title}>{title}</h3>
          <p className={styles.list_card_createdAt}>{createdAt}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListCard;
