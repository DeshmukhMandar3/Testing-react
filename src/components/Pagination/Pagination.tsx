import React from "react";
import PageCell from "./PageCell";

type PaginationProps = {
  total: number;
  selected: number;
  onPageChange: (val: number) => void;
};

const Pagination = ({ total, selected, onPageChange }: PaginationProps) => {
  let ans = [];
  for (let i = 0; i < total; i++) {
    let style;
    let id;
    if (i + 1 === selected) {
      style = { border: "solid blue" };
    } else {
      style = { border: "none" };
    }
    ans.push(
      // <button value={i + 1} style={style} data-testid={id} key={i + 1}>
      //   {i + 1}
      // </button>
      <PageCell key={i + 1} style={style} content={i + 1} />
    );
  }

  return (
    <div>
      Pagination
      <button
        data-testid={"prev-button"}
        onClick={() => onPageChange(-1)}
        disabled={selected === 1}
      >
        {"<"}
      </button>
      {ans}
      <button
        data-testid={"next-button"}
        onClick={() => onPageChange(+1)}
        disabled={selected === total}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
