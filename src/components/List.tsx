"use client";
import React, { ReactElement } from "react";
import { Portfolio } from "@/app/types";
import { useDeviceContext } from "@/components/DeviceContext";
import Grid from "@/components/common/Grid";
import ListCard from "@/components/ListCard";

interface ListProps {
  portfolios: Portfolio[];
}

const List = (props: ListProps): ReactElement => {
  const { isMobile, isTablet } = useDeviceContext();

  return (
    <Grid
      itemPerLine={isMobile ? 1 : isTablet ? 3 : 4}
      rowSpacing={24}
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
