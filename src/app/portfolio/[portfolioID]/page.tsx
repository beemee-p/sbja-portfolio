import React, { ReactElement } from "react";

interface PortfolioDetailProps {
  portfolioID: number;
}
const PortfolioDetail = (props: PortfolioDetailProps): ReactElement => {
  console.log(props.portfolioID);

  return <div>PortfolioDetail {props.portfolioID}</div>;
};

export default PortfolioDetail;
