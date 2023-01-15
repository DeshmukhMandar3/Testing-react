import { fireEvent, render, screen } from "@testing-library/react";
import { rem } from "polished";
import React from "react";
import Button from "./Button";
let flag = false;
function changeFlag() {
  flag = !flag;
}
it("should render Button and button to be disabled", () => {
  render(<Button children={"Hello World"} disabled={true} />);
  expect(screen.getByText("Hello World")).toBeDisabled();
});

it("should be able to click", () => {
  render(<Button children={"Hello World"} onClick={changeFlag} />);
  fireEvent.click(screen.getByText("Hello World"));
  expect((flag = true)).toBeTruthy();
});

it("color should be different for primary and secondary variant", () => {
  render(<Button children={"Hello World"} variant={"secondary"} />);
  expect(screen.getByText("Hello World")).toHaveStyle({
    color: "palevioletred",
    background: "white",
  });
});

it("should have font size according to selected size", () => {
  render(<Button children={"Hello World"} size="xs" />);
  expect(screen.getByText("Hello World")).toHaveStyle({
    fontSize: rem("16px"),
  });
  render(<Button children={"Hello Bird"} size="sm" />);
  expect(screen.getByText("Hello Bird")).toHaveStyle({ fontSize: rem("24px") });
});
