import { Popup } from "../components/Popup";

import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Check Popup component", () => {
  it("Should show Popup component", () => {
    let show = true;
    const title = "Test title";
    const { queryByText, unmount } = render(<Popup show={show} title={title} />);

    expect(queryByText(title)).toBeTruthy();

    act(() => {
      show = false;
      unmount();
    });

    expect(queryByText(title)).toBeFalsy();
  });
});
