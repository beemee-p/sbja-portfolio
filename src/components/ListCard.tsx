import { ReactElement } from "react";
import { Post } from "@/app/types";
import { getFormattedDate } from "@/library/getFormattedDate";
import Link from "next/link";

interface ListCardProps {
  post: Post;
}

const ListCard = (props: ListCardProps): ReactElement => {
  const { id, title, date } = props.post;
  const createdAt = getFormattedDate(date);

  return (
    <li>
      <Link href={`/portfolio/${id}`}>{title}</Link>
      <p>{createdAt}</p>
    </li>
  );
};

export default ListCard;