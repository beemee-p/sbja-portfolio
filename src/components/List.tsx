"use client";
import { Portfolio } from "@/app/types";
import React, { ReactElement } from "react";
import Grid from "./common/Grid";
import { useDeviceContext } from "./DeviceContext";
import ListCard from "./ListCard";

interface ListProps {
  portfolios: Portfolio[];
}

const List = (props: ListProps): ReactElement => {
  const { isMobile, isTablet } = useDeviceContext();

  return (
    <Grid
      itemPerLine={isMobile ? 1 : isTablet ? 3 : 4}
      rowSpacing={20}
      columnSpacing={40}
      direction={"row"}
    >
      {props.portfolios?.map((portfolio) => (
        <ListCard key={portfolio.id} portfolio={portfolio} />
      ))}
    </Grid>
  );
};

export default List;
