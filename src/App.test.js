import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders the portfolio hero content", () => {
  render(<App />);

  expect(screen.getByText(/Production WordPress work/i)).toBeInTheDocument();
  expect(screen.getByText(/WordPress websites maintained in production/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/More than 300 WordPress websites maintained/i)).toBeInTheDocument();
});

test("expands project card details", () => {
  render(<App />);

  const detailsButton = screen.getAllByRole("button", { name: /show details/i })[0];

  expect(detailsButton).toHaveAttribute("aria-expanded", "false");
  expect(detailsButton).toHaveAttribute("aria-controls", "school-website-build-details");

  fireEvent.click(detailsButton);

  const detailsPanel = screen.getByRole("region", {
    name: /school website build details/i
  });

  expect(detailsButton).toHaveAttribute("aria-expanded", "true");
  expect(detailsPanel).toHaveAttribute("aria-hidden", "false");
  expect(screen.getByText(/Clearer path to core school information/i)).toBeInTheDocument();

  fireEvent.click(screen.getAllByRole("button", { name: /show details/i })[0]);

  expect(screen.queryByRole("region", {
    name: /school website build details/i
  })).not.toBeInTheDocument();
});

test("lets visitors triage a sample support ticket", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /Support Triage Desk/i })).toBeInTheDocument();
  expect(screen.getByText(/Start here/i)).toBeInTheDocument();
  expect(screen.getByText(/1 of 4 tickets reviewed/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Reset demo/i })).toBeDisabled();

  fireEvent.click(screen.getByRole("button", { name: /Hero image breaks on mobile/i }));
  fireEvent.click(screen.getByRole("button", { name: /Move to Ready to ship/i }));

  expect(screen.getByText(/Selected ticket: Ready to ship/i)).toBeInTheDocument();
  expect(screen.getByText(/2 of 4 tickets reviewed/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/2 tickets in Ready to ship/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/0 tickets in In progress/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Landing page feels slow/i }));
  fireEvent.click(screen.getByRole("button", { name: /Editor block is hard to update/i }));

  expect(screen.getByRole("button", { name: /Reset demo/i })).not.toBeDisabled();
});

test("reveals the about card on demand", () => {
  render(<App />);

  const aboutButton = screen.getByRole("button", { name: /A bit about how I got here/i });

  expect(aboutButton).toHaveAttribute("aria-expanded", "false");

  fireEvent.click(aboutButton);

  expect(aboutButton).toHaveAttribute("aria-expanded", "true");
  expect(screen.getByText(/grew into production support/i)).toBeInTheDocument();
});

test("renders the public GitHub project archive", () => {
  render(<App />);

  expect(screen.getByText(/Showing 26 of 26 projects/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /CabKit3D/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /QR Code Component/i })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: /Memoir/i })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: /PHP Master Class Udemy Course/i })).not.toBeInTheDocument();
});

test("opens browser mockup screenshots in a lightbox", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /inspect screenshot: landing page build/i }));

  expect(screen.getByRole("dialog", { name: /screenshot preview: landing page build/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /close/i }));

  expect(screen.queryByRole("dialog", { name: /screenshot preview: landing page build/i })).not.toBeInTheDocument();
});

test("filters project cards by tag", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Dashboard" }));

  expect(screen.getByRole("button", { name: "Dashboard" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText(/Showing 1 of 26 projects/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Job Tracker Dashboard/i })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: /School Website Build/i })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "All" }));

  expect(screen.getByRole("heading", { name: /School Website Build/i })).toBeInTheDocument();
});

test("copies the email address from the contact card", async () => {
  const writeText = jest.fn().mockResolvedValue();
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText }
  });

  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /copy email address/i }));

  await waitFor(() => expect(writeText).toHaveBeenCalledWith("carinotj19@gmail.com"));
  expect(await screen.findByText(/Copied/i)).toBeInTheDocument();
});
