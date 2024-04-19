import "@testing-library/jest-dom";

import ContactPage from "@app/(main)/contact/_components/contact-page";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("renders a contact page", () => {
    render(<ContactPage />);

    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });
});
