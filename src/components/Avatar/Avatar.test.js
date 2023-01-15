import { render, screen } from "@testing-library/react";
import { rem } from "polished";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(<Avatar name="A B" />);
  });

  it("should pick initial correctly for fullName", () => {
    render(<Avatar name="Hello World" />);
    expect(screen.getByTestId("avatar")).toHaveTextContent("HW");
  });

  it("should pick only initial correctly for firstName", () => {
    render(<Avatar name="Baburao" />);
    expect(screen.getByTestId("avatar")).toHaveTextContent("B");
  });

  it("to show only image without text", () => {
    render(<Avatar name="Hemu won" src="lkjdslfjsldf.jpg" size="xs" />);
    expect(screen.getByTestId("avatar")).toHaveTextContent("");
  });

  it("should change size according to input", () => {
    render(<Avatar name="Baburao" size={"xs"} />);
    expect(screen.getByTestId("avatar")).toHaveStyle({ fontSize: rem("16px") });
  });
  it("should change size according to input2", () => {
    render(<Avatar name="Baburao" size={"lg"} />);
    expect(screen.getByTestId("avatar")).toHaveStyle({ fontSize: rem("40px") });
  });
});
