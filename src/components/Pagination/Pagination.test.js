import React from "react";
import Pagination from "./Pagination";
import { fireEvent, render, screen } from "@testing-library/react";
let val = 0;
it("should render", () => {
  render(<Pagination total={10} selected={2} />);
});

it("Previous button should be disabled when selected is 1", () => {
  render(<Pagination total={10} selected={1} />);
  expect(screen.getByTestId("prev-button")).toBeDisabled();
});

it("Next page button should be disabled when selected last page", () => {
  render(<Pagination total={10} selected={10} />);
  expect(screen.getByTestId("next-button")).toBeDisabled();
});

it("Selected button to have border of color blue", () => {
  render(<Pagination total={10} selected={5} />);
  expect(screen.getByText(5)).toHaveStyle({ border: "solid blue" });
});

it("should increment value by one on click of next button", () => {
  render(
    <Pagination
      total={10}
      selected={5}
      onPageChange={(va) => {
        val = va;
      }}
    />
  );
  fireEvent.click(screen.getByTestId("next-button"));
  expect(val === 1).toBeTruthy();
});

it("should decrement page by one when clicked on -1", () => {
  render(
    <Pagination
      total={10}
      selected={5}
      onPageChange={(va) => {
        val = va;
      }}
    />
  );
  fireEvent.click(screen.getByTestId("prev-button"));
  expect(val === -1).toBeTruthy();
});
