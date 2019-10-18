import React from "react";
import { render, wait } from "@testing-library/react";
import App from "../App";

const props = {
  apiUrl: "http://someapi.url",
  backLinkUrl: "http://whereyoucamefrom.url",
  logoUrl: "http://logo-lives-here.url",
  shopName: "My Cool Shop",
  showImages: false
};

describe("<App />", () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify({}));
  });

  it("renders without crashing", async () => {
    const { container } = render(<App />);
    await wait(() => expect(container).toBeVisible());
  });

  describe("back link", () => {
    it("renders when provided", async () => {
      const testProps = {
        ...props,
        backLinkUrl: "http://whereyoucamefrom.url",
        shopName: "My Cool Shop"
      };

      const { findByText } = render(<App {...testProps} />);
      const link = await findByText("My Cool Shop");
      expect(link).toHaveAttribute("href", "http://whereyoucamefrom.url");
    });

    it("does not render when not provided", async () => {
      const testProps = {
        ...props,
        backLinkUrl: null,
        shopName: "My Cool Shop"
      };

      const { queryByText } = render(<App {...testProps} />);
      await wait();
      const link = queryByText("My Cool Shop");

      expect(link).toBeNull();
    });
  });

  describe("logo", () => {
    it("renders when url is supplied", async () => {
      const testProps = {
        ...props,
        logoUrl: "http://logo-lives-here.url",
        shopName: "My Cool Shop"
      };
      const { findByAltText } = render(<App {...testProps} />);
      const logo = await findByAltText("My Cool Shop");

      expect(logo).toHaveAttribute("src", "http://logo-lives-here.url");
      expect(logo).toHaveAttribute("title", "My Cool Shop");
    });

    it("does not render when url is not supplied", async () => {
      const testProps = {
        ...props,
        logoUrl: null,
        shopName: "My Cool Shop"
      };

      const { queryByAltText } = render(<App {...testProps} />);
      await wait();
      const logo = queryByAltText("My Cool Shop");

      expect(logo).toBeNull();
    });
  });
});
