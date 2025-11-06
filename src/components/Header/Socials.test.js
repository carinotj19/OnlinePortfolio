import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Socials from "./Socials";

describe("Socials accessibility", () => {
  test("each link has aria-describedby referencing a tooltip id", () => {
    const { container } = render(<Socials />);

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);

    for (const link of links) {
      const describedBy = link.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();

      const tip = container.querySelector(`#${CSS.escape(describedBy)}`);
      expect(tip).toBeInTheDocument();
      expect(tip).toHaveAttribute("role", "tooltip");
    }
  });

  test("supports configurable links via props", () => {
    const custom = [
      {
        key: "x",
        href: "https://example.com",
        ariaLabel: "Open example",
        buttonClass: "bx",
        tooltip: "Example",
        icon: ["fas", "paper-plane"],
      },
    ];

    const { container } = render(<Socials links={custom} />);

    const link = screen.getByRole("link", { name: /open example/i });
    expect(link).toBeInTheDocument();
    const describedBy = link.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    const tip = container.querySelector(`#${CSS.escape(describedBy)}`);
    expect(tip).toBeInTheDocument();
    expect(tip).toHaveAttribute("role", "tooltip");
  });
});

