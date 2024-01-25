import { getPortfolio, getSortedPostsData } from "@/library/posts";
import { PortfolioProvider } from "@/components/portfolio/PortfolioContext";
import PortfolioMain from "@/components/portfolio/PortfolioMain";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo";
import NotFound from "@/app/portfolio/[portfolioID]/not-found";
import styles from "@/styles/css/PortfolioDetail.module.css";
import { DeviceProvider } from "@/components/DeviceContext";

// param 을 빌드시 먼저 생성
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
      title: "Portfolio Not Found",
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

  const portfolio = await getPortfolio(portfolioID);

  return (
    <DeviceProvider>
      <PortfolioProvider>
        <div className={`portfolio-content ${styles.content_wrap}`}>
          <div className={styles.content}>
            <PortfolioMain portfolio={portfolio} isPage />
            <PortfolioInfo contents={portfolio.contentHtml} isPage />
          </div>
        </div>
      </PortfolioProvider>
    </DeviceProvider>
  );
};

export default PortfolioDetail;
