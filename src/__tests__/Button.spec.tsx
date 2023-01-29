import { Button } from "../components/Button";

import { render } from "@testing-library/react";

describe("Test Button component", () => {
  it("should contains correct child", () => {
    const { queryByText } = render(<Button variant="black">Black</Button>);

    expect(queryByText("Black")).toBeTruthy();
  });

  it("should render correct tag", () => {
    const { container } = render(<Button as="div" />);

    expect(container.tagName).toStrictEqual("DIV");
  });
});