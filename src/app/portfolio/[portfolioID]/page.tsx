import { getFormattedDate } from "@/library/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/library/posts";
import Link from "next/link";
import NotFound from "@/app/portfolio/[portfolioID]/not-found";

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

  console.log("posts,", posts, portfolioID);
  if (!posts.find((post) => post.id === portfolioID)) {
    return NotFound();
  }

  const { title, date, contentHtml } = await getPostData(portfolioID);
  const pubDate = getFormattedDate(date);

  return (
    <div>
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
