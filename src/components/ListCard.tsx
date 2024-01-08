"use client";
import { ReactElement } from "react";
import { getFormattedDate } from "@/library/getFormattedDate";
import { Portfolio } from "@/app/types";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/css/ListCard.module.css";
import Badge from "./common/Badge";

interface ListCardProps {
  portfolio: Portfolio;
}

const ListCard = (props: ListCardProps): ReactElement => {
  const createdAt = getFormattedDate(props.portfolio.date);

  return (
    <li className={styles.list_card}>
      <Link
        className={styles.list_card_link}
        href={`/portfolio/${props.portfolio.id}`}
      >
        {props.portfolio.thumbnail && (
          <div className={styles.list_card_img_wrap}>
            <div className={styles.list_card_img}>
              <Image
                alt="thumbnail"
                src={props.portfolio.thumbnail}
                fill={true}
                quality={60}
              />
              <div className={styles.deem}></div>
            </div>
          </div>
        )}

        <div className={styles.list_card_info}>
          <h3 className={styles.list_card_title}>{props.portfolio.title}</h3>
          <div className={styles.list_card_badge}>
            {props.portfolio.skills?.map((skill, index) => (
              <Badge key={index} className={`${skill} badge`}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListCard;
