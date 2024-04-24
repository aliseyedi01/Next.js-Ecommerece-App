import "@testing-library/jest-dom";

import ContactPage from "@app/(main)/contact/_components/contact-page";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  // test text : Get In Touch
  it("should have get in touch text", () => {
    render(<ContactPage />);
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  // test for button send
  it("should have get in send button", () => {
    render(<ContactPage />);
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });

  // test for username input
  it("should render username input field", () => {
    render(<ContactPage />);
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  });
});
