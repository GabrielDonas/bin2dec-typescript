import { render } from "@testing-library/react";

import Header from "./Header";

describe("The Header component", () => {
  it("should render title as a props", () => {
    const { getByTestId } = render(<Header title="foo" />);

    expect(getByTestId("header")).toHaveTextContent("foo");
  });
});
