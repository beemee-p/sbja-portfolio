import { getFormattedDate } from "@/library/getFormattedDate";
import { getPortfolio, getSortedPostsData } from "@/library/posts";
import Link from "next/link";
import NotFound from "@/app/portfolio/[portfolioID]/not-found";
import styles from "@/styles/css/PortfolioDetail.module.css";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((portfolio) => ({ portfolioID: portfolio.id }));
}

const generateMetaData = ({ params }: { params: { portfolioID: string } }) => {
  const { portfolioID } = params;
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.id === portfolioID);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return { title: post?.title };
};

const PortfolioDetail = async ({
  params,
}: {
  params: { portfolioID: string };
}) => {
  const { portfolioID } = params;
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === portfolioID)) {
    return NotFound();
  }

  const { title, date, thumbnail, contentHtml } = await getPortfolio(
    portfolioID
  );

  const pubDate = getFormattedDate(date);

  return (
    <div className={styles.detail_wrap}>
      <h1>{title}</h1>
      <p>{pubDate}</p>

      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href={"/"}>Back to home</Link>
        </p>
      </article>
    </div>
  );
};

export default PortfolioDetail;
