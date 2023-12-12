"use client";
import { ReactElement, ReactNode, useEffect } from "react";
import styles from "@/styles/css/common/Grid.module.css";

interface GridProps {
  children: ReactNode;
  itemPerLine: number;
  rowSpacing?: number;
  columnSpacing?: number;
  direction?: "column" | "row";
}

const Grid = (props: GridProps): ReactElement => {
  const rowMargin = props.rowSpacing || 0;
  const columnMargin = props.columnSpacing || 0;
  const restRowWidth = Math.floor(rowMargin / props.itemPerLine);

  const width =
    props.direction === "row"
      ? `calc(100% / ${props.itemPerLine} - ${rowMargin}px + ${restRowWidth}px)`
      : "100%";

  useEffect(() => {
    const children = document.querySelector(".grid")
      ?.children as HTMLCollectionOf<HTMLElement>;

    for (const childIndex in children) {
      const child = children[+childIndex];

      if (+childIndex >= 0) {
        child.style.flexShrink = "0";
        child.setAttribute("id", (+childIndex + 1).toString());
        child.style.width = width;
        child.style.marginRight = rowMargin.toString() + "px";
        child.style.marginBottom = columnMargin.toString() + "px";

        if (+child.id % props.itemPerLine === 0) {
          child.style.marginRight = "0";
        }
      }
    }
  }, [
    rowMargin,
    columnMargin,
    props.columnSpacing,
    props.rowSpacing,
    props.direction,
    props.itemPerLine,
    width,
  ]);

  return <div className={`grid ${styles.grid}`}>{props.children}</div>;
};

export default Grid;
